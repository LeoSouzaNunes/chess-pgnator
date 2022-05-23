import { Link } from "react-router-dom";
import { StyledFooter } from "./styles";

export default function Footer() {
    const timeNow = new Date();
    const currentYear = timeNow.getFullYear();

    return (
        <StyledFooter>
            <small>
                Copyright &copy; {currentYear} ChessPGNator. All Rights Reserved
            </small>
            <small>
                <a
                    href="https://www.linkedin.com/in/leonardodesnunes/"
                    target="_blank"
                    rel="author"
                >
                    Linkedin
                </a>

                <a
                    href="https://github.com/LeoSouzaNunes"
                    target="_blank"
                    rel="author"
                >
                    Github
                </a>

                <Link to="/privacy">Privacy</Link>

                <Link to="/terms">Terms</Link>
            </small>
        </StyledFooter>
    );
}
