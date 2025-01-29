import { useParams } from "react-router";
import { useGetPassages } from "./useGetPassages";
import Spinner from "../../ui/Spinner";
import styled from "styled-components";

export default function Passage() {
  const { book, chapter } = useParams();
  const { loadingPassage, passage, error } = useGetPassages(book, chapter);

  const verses = passage?.verses;

  if (loadingPassage) return <Spinner />;

  return (
    <>
    <PassageWrapper>
      <Title>{`${passage?.verses[0].book} ${chapter}`}</Title>

      <VersesContainer>
        {verses.map((verse) => (
          <Verse key={verse.verse}>
            <VerseNumber>{verse.verse}</VerseNumber>
            <VerseText>{verse.text}</VerseText>
          </Verse>
        ))}
      </VersesContainer>
    </PassageWrapper>
    </>
  );
}

// Styled components
const PassageWrapper = styled.div`
  padding: 1.5rem;
  max-width: 75%;
  margin: 20px auto;
  font-family: "Arial", sans-serif;
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 1.5rem;
`;

const VersesContainer = styled.div`
  display: inline-block;
`;

const Verse = styled.span`
  font-size: 1.2rem;
  line-height: 1.7;
`;

const VerseNumber = styled.span`
  font-weight: bold;
  color: #007bff;
  margin-right: 0.25rem;
`;

const VerseText = styled.span`
  color: #333;
`;
