import { useMutation, useQueryClient } from "@tanstack/react-query"
import { createNote } from "../../api/apiNotes";

export const useNotes = (reset) => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: createNote,
        onSuccess: () => {
            queryClient.invalidateQueries(['notes']);
            reset();
        },
        onError: (error) => {
            console.error("Error creating note:", error.message);
        },
    });
}