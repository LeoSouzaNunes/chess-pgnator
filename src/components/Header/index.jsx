import { Container, TryNowButton, LogoTitle } from "./styles";

export default function Header() {
    return (
        <Container>
            <LogoTitle>
                Chess<b>PGN</b>ator
            </LogoTitle>
            <TryNowButton>Try now</TryNowButton>
        </Container>
    );
}
