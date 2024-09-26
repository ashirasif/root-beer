import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"


interface Review {
  id: number
  rating: number
  content: string
}


export default function ProductTabs(props: {
  description: string
  reviews: Review[]
}) {
  return (
    <Tabs defaultValue="description" className="w-full">
      <TabsList>
        <TabsTrigger value="description">Description</TabsTrigger>
        <TabsTrigger value="reviews">Reviews</TabsTrigger>
      </TabsList>
      <TabsContent value="description">Make changes to your account here.</TabsContent>
      <TabsContent value="reviews">Change your password here.</TabsContent>
    </Tabs>
  )
}

