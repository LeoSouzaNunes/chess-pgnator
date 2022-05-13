import { Container } from "./styles";
import LogoTitle from "../LogoTitle";
import TryNowButton from "../TryNowButton";

export default function Header() {
    return (
        <Container>
            <LogoTitle />
            <TryNowButton />
        </Container>
    );
}
