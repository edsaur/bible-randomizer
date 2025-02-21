import styled from "styled-components";
import { useFetchAllNotes } from "../notes/useFetchAllNotes";
import { useNavigate } from "react-router";

const ProfileContainer = styled.div`
  padding: 2rem;
  background: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
`;

const NotesContainer = styled.div`
  margin-top: 1rem;
`;

const NoteCard = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 1rem;
  text-align: left;
  cursor: pointer;

  &:hover {
    background: #f5f5f5;
    text-decoration: underline;
  }

  h3 {
    color: #007bff;
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
  }

  h4 {
    font-size: 1rem;
    color: #444;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 0.9rem;
    color: #666;
  }
`;

export default function UserProfile() {
  const {notes, error} = useFetchAllNotes();
  const navigate = useNavigate();

  if (error) return <ProfileContainer>Error loading notes</ProfileContainer>;

  return (
    <ProfileContainer>
      <NotesContainer>
        <h2>Your Notes</h2>
        {notes?.map((note) => {
          const [book, chapter, verse] = note.verse.split("/");
          return (
            <NoteCard key={note.id} onClick={() => navigate(`/bible/${book}/${chapter}/${verse}`)}>
              <h3>{`${book} ${chapter}:${verse}`}</h3>
              <h4>{note.title}</h4>
              <p>{note.note}</p>
            </NoteCard>
          );
        })}
      </NotesContainer>
    </ProfileContainer>
  );
}
