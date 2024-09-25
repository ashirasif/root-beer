import { useQuery } from "@tanstack/react-query";
import axios from "axios";

import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
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

  console.log(data, error, isLoading, isError)

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open</Button>
      </SheetTrigger>
      <SheetContent className="sheet-cont">
        
        <div className="flex sheet-main flex-row">
          <div>
            <img src="https://s3-alpha-sig.figma.com/img/680a/140e/13f345b62212169fbfff6e6def69ba0e?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gzdohP-mVrZbhBv77~kV6pTazu1Dkiq2NVdzTz8CSpEx~zCcHfCC0I9JTuCINpAjt0qdqjenE8hbvpzX0vAIaEvi~pKscaeKrV-2hpX4VBiuwCwzFDSPeWsoq8ylbdTHuoRxxSZEBWk3zSvZpExT9k6khbmOT2Kmu~UyanLRopMImefOLBhSwQ9kW1VguoWxk4mp~wgT-Xb3Q3OlbSZ7DF0YfTjtVlgH6cpSVrqvBRXjcBhnRRw~qFn~6uA1LL2Yku3TbmRGnvvoaXeLUggxsw6YfuGFq9m9ZNSAOF2vP6dpoKK5ohg0jcg4sTrFrUfGhmU6GK-~F44Rfb7vlIeqFA__" alt="" width={140} height={140}/>
          </div>
          <div className="flex flex-col justify-between items-center">
            <h1 className="drink-name-title">AW Root Beer Can</h1>
            <p className="drink-name-subtitle">$4.29 | <span className="drink-name-span">20 Cans Available</span></p>
            <StarIcon />
          </div>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            {/* <Button type="submit">Save changes</Button> */}
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}

