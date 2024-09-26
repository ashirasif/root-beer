import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import Rating from "./ReviewRating"


export default function ProductTabs(props: {
  description: string
  reviewsid: number
}) {

  const {data} = useQuery({queryKey: [`review_${props.reviewsid}`], queryFn: async () => {
    const res = await axios.get(`http://localhost:4000/api/drinks/${props.reviewsid}/reviews?offset=0&length=10`)
    return res.data
  }})

  if (!data) return null

  return (
    <Tabs defaultValue="description" className="w-full">
      <TabsList>
        <TabsTrigger value="description">Description</TabsTrigger>
        <TabsTrigger value="reviews">Reviews</TabsTrigger>
      </TabsList>
      <TabsContent value="description" className="text-primary-foreground py-4">{props.description}</TabsContent>
      <TabsContent value="reviews" className="py-4 flex-col flex gap-4">
        <div>
          {
            // review form
          }
        </div>
        <div className="flex-1">
          {
            data.items?.map((review: any) => (
              <div key={review.id} className="flex flex-col rounded-md px-4 py-6 hover:bg-background transition-colors duration-200 border border-background text-primary-foreground gap-2">
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

