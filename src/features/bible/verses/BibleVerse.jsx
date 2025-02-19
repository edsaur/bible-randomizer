import { useParams } from "react-router-dom";
import { useGetVerses } from "./useGetVerses";
import Spinner from "../../../ui/Spinner";
import PageNotFound from "../../../pages/PageNotFound";
import styled from "styled-components";
import BibleNotes from "../../notes/BibleNotes";

// Styled Components
const VerseContainer = styled.div`
  display: inline-block;
  width: 80%;
  max-width: 900px; // Prevents stretching too wide on large screens
  padding: 30px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const VerseHeading = styled.h1`
  font-size: 2rem;
  text-align: center;
  color: #333;
`;
const VerseNumber = styled.span`
  font-weight: bold;
  color: #007bff;
  margin-right: 0.25rem;
`;
const VerseText = styled.span`
  font-size: 1.2rem;
  line-height: 1.6;
  text-align: left;
  color: #555;
`;

const VerseWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  min-height: 100vh;
  background-color: #f4f4f4;
`;

export default function BibleVerse() {
  const { book, chapter, verse } = useParams();

  const { loadVerses, bibleVerses, error } = useGetVerses(book, chapter, verse);

  if (loadVerses) return <Spinner />;
  if (error) return <PageNotFound />;

  const verses = bibleVerses?.verses || [];

  return (
    <VerseWrapper>
      <VerseContainer>
        <VerseHeading>
          {verses[0]?.book_name} {chapter}:{verse}
        </VerseHeading>
        <VerseText>
          {verses.map((verses) => (
            <div key={verses.verse}>
              <VerseNumber >{verses.verse}</VerseNumber>
              <VerseText>{verses.text}</VerseText>
            </div>
          ))}
        </VerseText>
      </VerseContainer>

      <BibleNotes/>
    </VerseWrapper>
  );
}
