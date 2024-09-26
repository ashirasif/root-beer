import { CardComponent } from "@/components/card"
import { useQuery } from "@tanstack/react-query"
import axios from "axios"


export default function Drinks() {

    const {data, error, isLoading} = useQuery({
        queryKey: ['drinks'],
        queryFn: async () => {
            const response = await axios.get(`http://localhost:4000/api/drinks?offset=0&length=100&desc=true`)
            return response.data
        }
    })

    console.log(data)

    if (isLoading) return <div>Loading...</div>
    if (error) return <div>Error</div>

    return (
        <div className="flex justify-center items-center flex-wrap gap-[60px] max-w-[1200px] mx-auto mt-4">
            {
                data.items.map((drink: any) => (
                    <CardComponent key={drink.id} title={drink.name} subtitle={drink.description} img={drink.image} drinkID={drink.id} />
                ))
            }
        </div>
    )
}

