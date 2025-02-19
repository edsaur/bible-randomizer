import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useNotes } from "./useNotes";
import { useUser } from "../authentication/useUser";

// Styled components
const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 30px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 500px;
  margin: 10px auto;
`;

const Title = styled.h2`
  font-size: 1.8rem;
  text-align: center;
  color: #333;
  margin-bottom: 1.5rem;
`;

const Input = styled.input`
  padding: 10px;
  width: 100%;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 1rem;

  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

const Textarea = styled.textarea`
  padding: 10px;
  width: 100%;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;

  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

const SubmitButton = styled.button`
  background-color: #007bff;
  color: #fff;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  font-size: 1.1rem;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const Error = styled.p`
  color: red;
  font-size: 0.875rem;
  margin-bottom: 5px;
`;


const NoteForm = () => {
  const params = useParams();
  const {user} = useUser();
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const {mutate: createNote, isPending} = useNotes(reset);

  function noteSubmission(data) {
    const dataSubmitted = {...data, user_id: user.user.id, verse: `${params.book}/${params.chapter}/${params.verse}`};
    createNote(dataSubmitted);
  }
  return (
    <FormWrapper>
      <Title>Create a New Note</Title>
      <form onSubmit={handleSubmit(noteSubmission)}>
        <div>
          <Input
            type="text"
            placeholder="Note Title"
            {...register("title", { required: "The title is required" })}
          />
          {errors.title && (
            <Error>
              {errors.title.message}
            </Error>
          )}
        </div>

        <div>
          <Textarea
            placeholder="Write your note here..."
            {...register("content", { required: "Content is required" })}
          />
          {errors.content && (
            <Error>
              {errors.content.message}
            </Error>
          )}
        </div>

        <SubmitButton disabled={isPending}>Save Note</SubmitButton>
      </form>
    </FormWrapper>
  );
};

export default NoteForm;
