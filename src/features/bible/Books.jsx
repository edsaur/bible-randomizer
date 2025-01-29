import { Button } from "@mui/material";
import Spinner from "../../ui/Spinner";
import { useGetBibleBooks } from "./useGetBibleBooks";
import { Link } from "react-router";

export default function Books() {
  // contains the Bible books in button form to navigate to the book/chapter.
  // fetch books
  const { bibleLoading, bibleBooks, error } = useGetBibleBooks();

  const { books } = bibleBooks || {};
  console.log(books);
  if (bibleLoading) return <Spinner />;

  return (
    // map over the whole books
    <div>
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
    </div>
  );
}
