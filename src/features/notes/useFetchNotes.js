import { useQuery } from "@tanstack/react-query";
import { getNotes } from "../../api/apiNotes"
import { useUser } from "../authentication/useUser";

export const useFetchNotes = (verses) => {
    const {user} = useUser();
    const {isLoading: loadNotes, data: notes, error} = useQuery({
        queryKey: ['notes'],
        queryFn: () => getNotes(verses, user),
        refetchOnWindowFocus: false
});

return {loadNotes, notes, error};
}