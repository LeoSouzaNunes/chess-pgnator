import Container from "./styles";
import SquareTwoToneIcon from "@mui/icons-material/SquareTwoTone";

export default function TurnContainer({ turn }) {
    return (
        <Container colorToMove={turn}>
            {turn === "w" ? "White to move" : "Black to move"}
            {/* <SquareTwoToneIcon color="success" /> */}
        </Container>
    );
}
