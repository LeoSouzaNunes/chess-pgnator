import { StyledFooter } from "./styles";

export default function Footer() {
    const timeNow = new Date();
    const currentYear = timeNow.getFullYear();

    return (
        <StyledFooter>
            <small>
                Copyright &copy; {currentYear} ChessPGNator. All Rights Reserved
            </small>
        </StyledFooter>
    );
}
