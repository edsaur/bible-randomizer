import { useQuery } from "@tanstack/react-query"
import { getRandomVerses } from "../../api/apiBible";

export const useRandomVerse = () => {
    const {isLoading, isFetching, data, error, refetch} = useQuery({
        queryKey: ['randomVerse'],
        queryFn: getRandomVerses,
       
    })

    return {isLoading, isFetching, data, error, refetch};
}