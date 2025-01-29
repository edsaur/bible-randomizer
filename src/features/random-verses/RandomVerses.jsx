import styled from "styled-components";
import Spinner from "../../ui/Spinner";
import { useRandomVerse } from "./useRandomVerse";


const StyledParagraph = styled.p`
    font-style: italic;
`
export default function RandomVerses() {
    const {isLoading, isFetching, data, error} = useRandomVerse();

    if(isLoading || isFetching) return <Spinner/>

    return (
        <>
         <StyledParagraph>{data.text}</StyledParagraph>
         <h2>{data.reference} ({data.translation_id.toUpperCase()})</h2>
        </>
    )
}
