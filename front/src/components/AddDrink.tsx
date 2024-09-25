import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { ArrowLeftIcon } from "@radix-ui/react-icons"

export default function AddDrinks() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="default">Add New</Button>
      </SheetTrigger>
      <SheetContent>
        <div className="flex flex-col gap-4">
          <Button size="icon">
            <ArrowLeftIcon />
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  )
}
