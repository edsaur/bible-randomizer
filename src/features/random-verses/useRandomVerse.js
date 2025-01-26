import { useQuery } from "@tanstack/react-query"
import { getRandomVerses } from "../../api/apiBible"

export const useRandomVerse = () => {
    const {isLoading, isFetching, data, error, refetch} = useQuery({
        queryKey: ['randomVerse'],
        queryFn: getRandomVerses,
        refetchOnWindowFocus: false, // Prevents refetching when switching tabs
    })

    return {isLoading, isFetching, data, error, refetch};
}