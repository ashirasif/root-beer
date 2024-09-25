import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export default function ProductDetail(props: {
  id: number
}) {
  const { data, error, isLoading } = useQuery({queryKey: [String(props.id)], queryFn: async () => {
    const res = await axios.get(`http://localhost:4000/api/drinks/${props.id}`)
    return res.data
  }})

  console.log(data, error, isLoading)


  return (
    <div>hello</div>
  )
}

