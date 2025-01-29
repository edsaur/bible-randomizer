import { useParams } from "react-router"
import Chapters from "../features/bible/Chapters";

export default function BibleChapters() {
    // Put list of bible Chapeters here:
    const {book} = useParams();
    return (
        <div>
            <Chapters book={book}/>
        </div>
    )
}
