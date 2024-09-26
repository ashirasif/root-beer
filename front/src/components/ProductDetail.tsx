import { useQuery } from "@tanstack/react-query";
import axios from "axios";

import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { StarIcon } from "@radix-ui/react-icons";
import ProductTabs from "./ProductTabs";

export default function ProductDetail(props: {
  id: number
}) {
  const { data, error, isLoading, isError } = useQuery({queryKey: ['todo'], queryFn: async () => {
    const res = await axios.get(`http://localhost:4000/api/drinks/${props.id}`)
    return res.data
  }})

  if (isLoading) return <p>Loading...</p>
  if (isError) return <p>Error</p>

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open</Button>
      </SheetTrigger>

      <SheetContent className="sm:w-[30rem] bg-accent sm:max-w-full">
        <div className="flex flex-col gap-6">
          <h1 className="text-primary-foreground">Detail View</h1>
          <div className="h-px bg-background"></div>
          <div className="flex bg-background rounded-md w-full p-[0.65rem] gap-[1.44rem] flex-row">
            <div>
              <img src={"/can.png"} alt="" className="w-24"/>
            </div>
            <div className="flex flex-col gap-2 justify-evenly">
              <h3 className="text-white font-semibold">{data.name}</h3>
              <div className="flex gap-2 items-center flex-row">
                <div className="flex">
                  {
                    Array.from({length: 5}).map((_, i) => (
                      <StarIcon key={i} className="w-6 h-6 text-[#FF8C13]"/>
                    ))
                  }
                </div>
                <p className="text-primary-foreground text-2xl">{data.reviewAverageRating}</p>
                <p className="text-primary-foreground text-2xl">({data.reviewCount})</p>
              </div>
            </div>
          </div>
          <ProductTabs description={data.description} reviewsid={data.id}/>
        </div>
      </SheetContent>
    </Sheet>
  )
}

