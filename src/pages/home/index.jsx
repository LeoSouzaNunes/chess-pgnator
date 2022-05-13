import { HomeContainer, MainContentContainer, MainSection } from "./styles";
import { Header } from "../../components";
import TryNowButton from "../../components/TryNowButton";

export default function Home() {
    return (
        <HomeContainer>
            <Header />
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
                        with chess-pgnator a free PGN editor where you can
                        create
                        <br />
                        your chess studies.
                        <br />
                    </p>
                </MainSection>
                <TryNowButton />
            </MainContentContainer>
        </HomeContainer>
    );
}
