import { useQuery } from "@tanstack/react-query"
import { queryKey } from "./dataQueryKeys"

export const getProducts = async () =>{
    const response = await fetch('https://fakestoreapi.com/products')
    const data = await response.json()
    return data
}

export const usegetPost = ()=>{
    return useQuery({
        queryKey: [queryKey.products],
        queryFn: getProducts,
    })
}