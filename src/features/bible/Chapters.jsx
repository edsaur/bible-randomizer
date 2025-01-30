import { Button } from "@mui/material";
import { useGetChapters } from "./useGetChapters";
import { Link } from "react-router";
import Spinner from "../../ui/Spinner";

export default function Chapters({ book }) {
  const { loadingChapters, bookChapters, error } = useGetChapters(book);
  
  if (loadingChapters) return <Spinner />;

  const { chapters } = bookChapters;
  return (
    <>
      <h1>{chapters[0].book}</h1>
      {chapters.map((chapter) => (
        <Button
          sx={{ m: "1rem" }}
          variant="contained"
          key={`${chapter.book_id} ${chapter.chapter}`}
          component={Link} // Use the Button's component prop
          to={`/bible/${book}/${chapter.chapter}`} // Pass the "to" prop for navigation
        >
          {chapter.chapter}
        </Button>
      ))}
    </>
  );
}
