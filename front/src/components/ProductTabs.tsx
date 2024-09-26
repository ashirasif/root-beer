import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import Rating from "./ReviewRating"
import ReviewForm from "./ReviewForm"
import { useEffect } from "react"


export default function ProductTabs(props: {
  description: string
  reviewsid: number
  refetch: () => void
}) {

  const {data, refetch} = useQuery({queryKey: [`review_${props.reviewsid}`], queryFn: async () => {
    const res = await axios.get(`http://localhost:4000/api/drinks/${props.reviewsid}/reviews?offset=0&length=100`)
    return res.data
  }})

  useEffect(() => {
    props.refetch()
  }, [data])

  if (!data) return null

  return (
    <Tabs defaultValue="description" className="w-full flex-1">
      <TabsList>
        <TabsTrigger value="description">Description</TabsTrigger>
        <TabsTrigger value="reviews">Reviews</TabsTrigger>
      </TabsList>
      <TabsContent value="description" className="text-primary-foreground py-4 text-center text-lg">{props.description}</TabsContent>
      <TabsContent value="reviews" className="py-4 h-full flex-col flex gap-4">
        <div>
          <ReviewForm drinkId={props.reviewsid} refetch={refetch} />
        </div>
        <div className="h-px bg-background"></div>
        <div className="h-40 overflow-y-auto flex flex-col gap-4 border rounded-md border-background px-2">
          {
            data.items?.map((review: any) => (
              <div key={review.id} className="flex flex-col rounded-md px-4 py-6 border border-background text-primary-foreground gap-2">
                <div className="flex gap-4">
                  <p className="font-semibold text-xl">{review.user_name}</p>
                  <Rating rating={review.rating}/>
                </div>
                <p>{review.description}</p>
              </div>
            ))
          }
        </div>
      </TabsContent>
    </Tabs>
  )
}

