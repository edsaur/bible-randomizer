import styled from "styled-components";
import Spinner from "../../ui/Spinner";
import { useRandomVerse } from "./useRandomVerse";
import { Link } from "react-router";

const StyledParagraph = styled.p`
  font-style: italic;
`;

const StyledLink = styled(Link)`
&:hover {
    color: darkblue;
  }
`;

export default function RandomVerses() {
  const { isLoading, isFetching, data } = useRandomVerse();

  if (isLoading || isFetching) return <Spinner />;
  
  return (
    <>
      <StyledParagraph>{data.text}</StyledParagraph>
      <h2>
        {data.reference} ({data.translation_id.toUpperCase()}){" "}
      </h2>
      <StyledLink
        to={`/bible/${data.verses[0].book_id}/${data?.verses[0].chapter}/${
          data.verses.length > 1 &&
          `${data.verses[0].verse}-${data.verses[data.verses.length - 1].verse}`
        }`}
      >
        Go to verse
      </StyledLink>
    </>
  );
}
