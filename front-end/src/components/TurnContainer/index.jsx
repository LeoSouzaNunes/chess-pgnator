import Container from "./styles";

export default function TurnContainer({ turn }) {
    return (
        <Container colorToMove={turn}>
            {turn === "w" ? "White to move" : "Black to move"}
        </Container>
    );
}
