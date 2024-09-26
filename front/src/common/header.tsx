import AddDrinks from "@/components/AddDrink"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

export default function Header() {
    return (
        <div className="flex flex-col md:flex-row p-10 justify-center items-center">

            {/* Title and Date Section */}
            <div className="flex flex-col mb-4 md:mb-0">

                <h3 className="text-white text-4xl font-barlow">Root Beers</h3>
                <p className="text-zinc-300 text-md font-barlow text-center">Tuesday, 2 Feb 2021</p>

            </div>

            {/* Search Bar and Button */}
            <div className="flex flex-col md:flex-row md:ml-auto w-full md:w-auto justify-center items-center md:items-start">

                {/* Search Bar */}
            <div className="relative w-full md:w-auto flex-1 mb-4 md:mb-0 md:mr-2">
                <Search className="absolute left-2.5 top-2.5 h-8 w-4 text-muted-foreground text-white" />

                    {/* Input Search Bar */}

                    <Input
                        type="search"
                        placeholder="Search beer"
                        className="w-full rounded-md bg-zinc-800 pl-8 h-12 text-zinc-100 border-zinc-600 focus:ring-0 focus:border-transparent md:w-[200px] lg:w-[320px]" />
                </div>

                {/* Add New Button */}
                <AddDrinks />

            </div>
        </div>
    )
}
