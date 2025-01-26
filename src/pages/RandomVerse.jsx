import styled from "styled-components";
import Row from "../ui/Row";
import Box from "../ui/Box";
import RandomVerses from "../features/random-verses/RandomVerses";
import { Button } from "@mui/material";
import { useRandomVerse } from "../features/random-verses/useRandomVerse";

const StyledRow = styled(Row)`
    flex-direction: column;
    margin: 2rem auto;
`


export default function RandomVerse() {
    const {refetch} = useRandomVerse();
    function handleClick(){
        refetch();
    }
    
    return (
        <StyledRow>
            <h1>Random Bible Verses</h1>
            <Box>
                <RandomVerses/>
            </Box>
            <Button variant="outlined" onClick={handleClick}>Generate New Verse</Button>
        </StyledRow>
    )
}
