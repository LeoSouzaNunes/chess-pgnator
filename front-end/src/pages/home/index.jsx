import { HomeContainer, MainContentContainer, MainSection } from "./styles";
import { Header, TryNowButton, Footer } from "../../components";

export default function Home() {
    return (
        <HomeContainer>
            <Header none={false} />
            <MainContentContainer>
                <MainSection>
                    <h1>
                        Transcript your favorite chess games
                        <br />
                        to PGN format with Chess<b>PGN</b>ator!
                    </h1>
                    <p>
                        Translate your favorite annotated chess games to PGN
                        format
                        <br />
                        with ChessPGNator a free PGN editor where you can create
                        <br />
                        your chess studies.
                        <br />
                    </p>
                </MainSection>
                <TryNowButton none={false} />
            </MainContentContainer>
            <Footer />
        </HomeContainer>
    );
}
