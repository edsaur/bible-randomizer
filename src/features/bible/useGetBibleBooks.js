import { useQuery } from "@tanstack/react-query"
import { getBibleBooks } from "../../api/apiBible"

export const useGetBibleBooks = () => {
    const {isLoading: bookLoading, data: bible, error} = useQuery({
        queryKey: ['bible-books'],
        queryFn: getBibleBooks
    })

    return {bookLoading, bible, error};
}