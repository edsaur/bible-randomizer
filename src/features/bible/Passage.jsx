import { useNavigate, useParams } from "react-router";
import { useGetPassages } from "./useGetPassages";
import Spinner from "../../ui/Spinner";
import styled from "styled-components";
import { useGetChapters } from "./useGetChapters";
import NavigationButton from "../../ui/NavigationButton";
import { useGetBibleBooks } from "./useGetBibleBooks";
import PageNotFound from "../../pages/PageNotFound";

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
  cursor: pointer;
  font-size: 1.2rem;
  line-height: 1.7;

  &:hover {
    text-decoration: underline;
  }
`;

const VerseNumber = styled.span`
  font-weight: bold;
  color: #007bff;
  margin-right: 0.25rem;
`;

const VerseText = styled.span`
  color: #333;
`;

export default function Passage() {
  const { book, chapter } = useParams();
  const navigate = useNavigate();
  const {
    loadingPassage,
    passage,
    error: passagesError,
  } = useGetPassages(book, chapter);

  const {
    loadingChapters,
    bookChapters,
    error: chaptersError,
  } = useGetChapters(book);

  const { bookLoading, bibleBooks, error: bookError } = useGetBibleBooks();


  const bibleIndex = bibleBooks?.books?.findIndex((bk) => bk.id === book);
  const previousBook = bibleIndex > 0 && bibleBooks?.books[bibleIndex - 1];
  const nextBook =
    bibleIndex < bibleBooks?.books.length - 1 &&
    bibleBooks.books[bibleIndex + 1];
   
  const prevBookLastChapter = useGetChapters(previousBook.id)?.bookChapters?.chapters.length;
  const currentChapterIndex = bookChapters?.chapters?.findIndex(
    (ch) => ch.chapter === Number(chapter)
  );

  const previousChapter =
    currentChapterIndex > 0
      ? bookChapters?.chapters[currentChapterIndex - 1]
      : previousBook
      ? { book_id: previousBook.id, chapter: prevBookLastChapter }
      : null;

  const nextChapter =
    currentChapterIndex < bookChapters?.chapters.length - 1
      ? bookChapters?.chapters[currentChapterIndex + 1]
      : nextBook
      ? { book_id: nextBook.id, chapter: 1 }
      : null;

  const handleNavigate = (target) => {
    if (target.book_id && target.chapter) {
      navigate(`/bible/${target.book_id}/${target.chapter}`);
    }
  };
  
  const verses = passage?.verses;

  if (loadingPassage || loadingChapters || bookLoading) return <Spinner />;
  if (passagesError || chaptersError || bookError)
    return <PageNotFound/>;

  return (
    <>
      <PassageWrapper>
        <Title>{`${passage?.verses[0].book_name} ${chapter}`}</Title>

        <VersesContainer>
          {verses.map((verse) => (
            <Verse key={verse.verse} onClick={() => navigate(`/bible/${book}/${chapter}/${verse.verse}`)}>
              <VerseNumber>{verse.verse}</VerseNumber>
              <VerseText>{verse.text}</VerseText>
            </Verse>
          ))}
        </VersesContainer>
      </PassageWrapper>
      <NavigationButton
        previous={previousChapter}
        next={nextChapter}
        onNavigate={handleNavigate}
      />
    </>
  );
}
