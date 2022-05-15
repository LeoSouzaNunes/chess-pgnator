import { Container } from "./styles";
import LogoTitle from "../LogoTitle";
import TryNowButton from "../TryNowButton";

export default function Header({ content, none }) {
    return (
        <Container justify={content}>
            <LogoTitle />
            <TryNowButton none={none} />
        </Container>
    );
}
