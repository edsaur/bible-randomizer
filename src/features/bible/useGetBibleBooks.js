import { useQuery } from "@tanstack/react-query"
import { getBibleBooks } from "../../api/apiBible"

export const useGetBibleBooks = () => {
    const {isLoading: bookLoading, data: bibleBooks, error} = useQuery({
        queryKey: ['bible-books'],
        queryFn: getBibleBooks,
        refetchOnWindowFocus: false
    })

    return {bookLoading, bibleBooks, error};
}