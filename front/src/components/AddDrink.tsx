import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { ArrowLeftIcon, ArrowUpIcon } from "@radix-ui/react-icons"

export default function AddDrinks() {
  return (
    <Sheet>

      <SheetTrigger asChild>
        <Button variant="default">Add New</Button>
      </SheetTrigger>

      <SheetContent className="bg-slate-950">

        <div className="flex flex-col gap-4">
          <Button size="icon">
            <ArrowLeftIcon />
          </Button>
        </div>

        <h1 className="mt-2 text-xl text-white">Add New Product</h1>
        <div className="border-b-slate-950 border-2"></div>

        <div className="mt-4 w-128 h-36 bg-zinc-800 rounded-xl flex flex-col justify-center items-center border border-white border-dashed">

          <button className="flex items-center space-x-2 p-2 text-white rounded">
            <ArrowUpIcon className="h-10 w-10" />
          </button>

          <p className="text-zinc-300 text-sm">Drag and drop or <span className="text-red-500 underline">browse</span> image here.</p>

          <p className="text-zinc-500 text-sm">Support: JPG, JPEG, PNG</p>

        </div>


        <input type="text" placeholder="Product Title" className="mt-4 w-full h-10 bg-zinc-800 rounded-xl p-4 text-white" />

        {/* description */}
        <input type="text" placeholder="Description" className="mt-4 w-full h-1/6 bg-zinc-800 rounded-xl p-4 text-white" />

        <div className="mt-4 flex flex-col gap-4">
          <Button className="bg-red-500">Save</Button>
          <Button variant={"outline"} className="bg-slate-950 text-red-500 border-red-500">Cancel</Button>
        </div>

      </SheetContent>
    </Sheet>
  )
}
