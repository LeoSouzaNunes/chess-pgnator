import { useNavigate } from "react-router-dom";
import { Text } from "./styles";

export default function TextButton({ destination, content }) {
    const navigate = useNavigate();

    return (
        <Text
            onClick={() => {
                navigate("/" + destination);
            }}
        >
            {content}
        </Text>
    );
}
