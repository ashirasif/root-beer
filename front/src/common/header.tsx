import AddDrinks from "@/components/AddDrink"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

export default function Header() {
    return (
        <div className="flex flex-col md:flex-row p-10 justify-center items-center">

            {/* Title and Date Section */}
            <div className="flex flex-col mb-4 md:mb-0">
                <h3 className="text-white text-4xl font-barlow">Root Beers</h3>

            </div>

            {/* Search Bar and Button */}
            <div className="flex flex-col md:flex-row gap-4 md:ml-auto w-full md:w-auto justify-center items-center md:items-start">

                <AddDrinks />
                {/* Search Bar */}
                <div className="relative w-full md:w-auto flex-1 mb-4 md:mb-0 md:mr-2">
                    {/* Add New Button */}
                    <Search className="absolute left-2.5 top-2.5 h-8 w-4 text-primary" />

                    {/* Input Search Bar */}

                    <Input
                        type="search"
                        placeholder="Search Beers"
                        className="w-full rounded-md pl-8 h-12 text-primary-foreground placeholder:text-primary border-primary focus:ring-0 md:w-[200px] lg:w-[320px]" />
                </div>

            </div>
        </div>
    )
}
