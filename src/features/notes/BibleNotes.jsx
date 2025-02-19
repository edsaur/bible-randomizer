import styled from "styled-components"
import Notes from "./Notes";
import NoteForm from "./NoteForm";
import {useUser} from '../authentication/useUser';
import Button from "../../ui/Button";
import { useNavigate } from "react-router-dom";
const StyledNotes = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 20px auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  font-family: "Arial", sans-serif;
`;

export default function BibleNotes() {
    const {user} = useUser();
    const navigate = useNavigate();

    if(!user){
        return (
            <StyledNotes>
                <h1>Please log in to add/view a note</h1>
                <Button onClick={() => navigate("/login")}>Login</Button>
            </StyledNotes>
        )
    }
    return (
        <StyledNotes>
            <Notes/>
            <NoteForm/>
        </StyledNotes>
    )
}
