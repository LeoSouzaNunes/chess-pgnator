import { useNavigate } from "react-router-dom";
import { Button } from "./styles";

export default function TryNowButton({ none }) {
    const navigate = useNavigate();
    return (
        <Button
            show={none}
            onClick={() => {
                navigate("/pgn-editor");
            }}
        >
            Try now
        </Button>
    );
}
