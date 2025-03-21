import { useQuery } from "@tanstack/react-query"
import { getBibleVerses } from "../../../api/apiBible";

export const useGetVerses = (book, chapter, verses)=>{
    const {isLoading: loadVerses, data: bibleVerses, error} = useQuery({
        queryKey: ['bibleVerse', book, chapter, verses],
        queryFn: () => getBibleVerses(book, chapter, verses),
    });

    return {loadVerses, bibleVerses, error};
}