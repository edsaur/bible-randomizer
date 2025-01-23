import styled from "styled-components"
import Row from "../ui/Row";

const StyledHomepage = styled.div`
    display: flex;
    color: white;
`;

export default function Homepage() {
    return (
        <Row>
            <h1>Hello World</h1>
        </Row>
    )
}
