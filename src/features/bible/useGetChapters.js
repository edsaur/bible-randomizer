import { useQuery } from "@tanstack/react-query";
import { getBibleChapters } from "../../api/apiBible";

export const useGetChapters = (book) => {
  const {
    isLoading: loadingChapters,
    data: bookChapters,
    error,
  } = useQuery({
    queryKey: ["bible-chapter", book],
    queryFn: () => getBibleChapters(book),
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 * 5,
    cacheTime: 1000 * 60 * 30,
    enabled: !!book,
  });

  return { loadingChapters, bookChapters, error };
};
