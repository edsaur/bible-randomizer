import { useParams } from "react-router"
import Chapters from "../features/bible/Chapters";
import Box from "../ui/Box";

export default function BibleChapters() {
    // Put list of bible Chapeters here:
    const {book} = useParams();
    return (
        <Box>
            <Chapters book={book}/>
        </Box>
    )
}
