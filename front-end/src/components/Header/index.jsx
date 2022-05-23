import { Container, ButtonsContainer } from "./styles";
import LogoTitle from "../LogoTitle";
import TryNowButton from "../TryNowButton";
import TextButton from "../TextButton";

export default function Header({ none }) {
    return (
        <Container>
            <LogoTitle />
            <ButtonsContainer>
                <TextButton content="About" destination="about" />
                <TextButton content="Contact" destination="contact" />
                {none ? (
                    <TextButton content="Home" destination="" />
                ) : (
                    <TryNowButton none={none} />
                )}
            </ButtonsContainer>
        </Container>
    );
}
