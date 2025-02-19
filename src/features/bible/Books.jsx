import { Button } from "@mui/material";
import Spinner from "../../ui/Spinner";
import { useGetBibleBooks } from "./useGetBibleBooks";
import { Link } from "react-router-dom";
import PageNotFound from "../../pages/PageNotFound";

export default function Books() {
  // contains the Bible books in button form to navigate to the book/chapter.
  // fetch books
  const { bibleLoading, bibleBooks, error } = useGetBibleBooks();

  const { books } = bibleBooks || {};
  if (bibleLoading) return <Spinner />;
  if (error) return <PageNotFound/>

  return (
    // map over the whole books
    <>
    <h1>The Books of the Bible</h1>
      {books?.map((book) => (
        <Button
          key={book.id}
          variant="contained"
          sx={{ m: "1rem" }}
          component={Link}
          to={`/bible/${book.id}/chapters`}
        >
          {book.name}
        </Button>
      ))}
    </>
  );
}
