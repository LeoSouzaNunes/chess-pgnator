import { Footer, ClientEmail, Header } from "../../components";
import { Container, MainContainer } from "./styles";

export default function ContactUs() {
    return (
        <Container>
            <Header none={false} />
            <MainContainer>
                <div>
                    <h1>Contact us</h1>
                    <p>Feel free to send any suggestion or report a bug</p>
                    <ClientEmail />
                </div>
            </MainContainer>
            <Footer />
        </Container>
    );
}
