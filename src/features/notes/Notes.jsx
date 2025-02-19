import { useParams } from "react-router";
import styled from "styled-components";
import { useFetchNotes } from "./useFetchNotes";
import Spinner from "../../ui/Spinner";
import PageNotFound from "../../pages/PageNotFound";
import { useDeleteNote } from "./useDeleteNote";



const NoteHeader = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 10px;
  color: #333;
`;

const NoteText = styled.p`
  font-size: 1.1rem;
  color: #555;
  line-height: 1.6;
`;

const NoteListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const NoteContainer = styled.div`
  background-color: #fff;
  padding: 15px;
  border-radius: 5px;
  border: 1px solid #ddd;
`;

const DeleteButton = styled.button`
  background-color: #ff4d4d;
  color: white;
  border: none;
  padding: 8px 12px;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 5px;
  margin-top: 10px;
  transition: background 0.2s ease-in-out;

  &:hover {
    background-color: #cc0000;
  }
`;

export default function Notes() {
  // Fake data for the user's notes
  const params = useParams();
  const verses = `${params.book}/${params.chapter}/${params.verse}`;
  const {notes, loadNotes, error}  = useFetchNotes(verses);
  const {mutate: deleteNote, isPending} = useDeleteNote();

  if(loadNotes) return <Spinner/>;
  if(error) return <PageNotFound/>;

  function handleDelete(id){
    // console.log(id)
    deleteNote(id);
  }
  return (
    <>
      <NoteListWrapper>
        {notes.map(note => (
          <NoteContainer key={note.id}>
            <NoteHeader>{note.title}</NoteHeader>
            <NoteText>{note.note}</NoteText>
            <DeleteButton onClick={() => handleDelete(note.id)} disabled={isPending}>Delete</DeleteButton>
          </NoteContainer>
        ))}
      </NoteListWrapper>
    </>
  );
}
