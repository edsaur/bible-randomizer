import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteNote } from "../../api/apiNotes";

export const useDeleteNote = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: deleteNote,
        onSuccess: () => {
            queryClient.invalidateQueries(['notes']);
        },
        onError: (error) => {
            console.error("Error deleting note:", error.message);
        },
    });
}