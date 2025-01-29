import { useQuery } from "@tanstack/react-query";
import { getPassages } from "../../api/apiBible";

export const useGetPassages = (book, chapter) => {
  const {
    isLoading: loadingPassage,
    data: passage,
    error,
  } = useQuery({
    queryKey: ["passage", book, chapter],
    queryFn: () => getPassages(book, chapter),
    refetchOnWindowFocus: false,
  });

  return { loadingPassage, passage, error };
};
