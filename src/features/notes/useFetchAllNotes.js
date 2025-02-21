import { useQuery } from "@tanstack/react-query";
import { useUser } from "../authentication/useUser";
import { getAllNotes } from "../../api/apiNotes";

export const useFetchAllNotes = () => {
    const {user} = useUser();
    console.log(user);
    const {isLoading: loadNotes, data: notes, error} = useQuery({
        queryKey: ['notes'],
        queryFn: () => getAllNotes(user),
    });

    return {loadNotes, notes, error};
}