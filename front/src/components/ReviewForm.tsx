"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import RatingStar from "./ReviewFormRating"
import { Textarea } from "./ui/textarea"
import { useMutation } from "@tanstack/react-query"
import axios from "axios"

const formSchema = z.object({
  username: z.string({required_error: "Username is required"}).min(1, {message: "Username is required"}).max(50, {message: "Username is too long"}), // (1),
  description: z.string({required_error: "Description is required"}).min(1, {message: "Description is required"}).max(500, {message: "Description is too long"}), // (2),
  rating: z.number().int().min(1).max(5),
})

export default function ReviewForm(props: {
  drinkId: number
  refetch: () => void
}) {

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      description: "",
      rating: 0,
    }
  })

  const {mutate} = useMutation({
    mutationFn: async (data: any) => {
      const res = await axios.post(`http://localhost:4000/api/drinks/${props.drinkId}/reviews`, data)
      return res.data
    },
    onSuccess: () => {
      props.refetch()
      form.reset()
    }
  })

  function onSubmit(data: z.infer<typeof formSchema>) {
    mutate({
      user_name: data.username,
      description: data.description,
      rating: data.rating,
    })
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
        <FormField
          control={form.control}
          name="rating"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <RatingStar onChange={field.onChange} value={field.value} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input {...field} placeholder="Username" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Textarea {...field} placeholder="Description" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="w-full" type="submit">Submit</Button>
      </form>
    </Form>
  )
}
