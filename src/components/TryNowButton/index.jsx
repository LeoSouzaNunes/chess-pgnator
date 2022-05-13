import { useNavigate } from "react-router-dom";
import { Button } from "./styles";

export default function TryNowButton() {
    const navigate = useNavigate();
    return (
        <Button
            onClick={() => {
                navigate("/pgn-editor");
            }}
        >
            Try now
        </Button>
    );
}
