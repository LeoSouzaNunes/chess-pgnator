import { useNavigate } from "react-router-dom";
import { Logo } from "./styles";

export default function LogoTitle() {
    const navigate = useNavigate();
    return (
        <Logo
            onClick={() => {
                navigate("/");
            }}
        >
            Chess<b>PGN</b>ator
        </Logo>
    );
}
