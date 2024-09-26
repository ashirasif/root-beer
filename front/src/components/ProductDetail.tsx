import { useQuery } from "@tanstack/react-query";
import axios from "axios";

import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { StarIcon } from "@radix-ui/react-icons";

export default function ProductDetail(props: {
  id: number
}) {
  const { data, error, isLoading, isError } = useQuery({queryKey: ['todo'], queryFn: async () => {
    const res = await axios.get(`http://localhost:4000/api/drinks/${props.id}`)
    return res.data
  }})

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open</Button>
      </SheetTrigger>

      <SheetContent className="sm:w-[30rem] sm:max-w-full">
        <div className="flex bg-slate-900 w-full p-[0.65rem] gap-[1.44rem] flex-row">
          <div>
            <img src={"/can.png"} alt="" className="w-24"/>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-white">AW Root Beer Can</h3>
            <p className="drink-name-subtitle">$4.29 | <span className="drink-name-span">20 Cans Available</span></p>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}

