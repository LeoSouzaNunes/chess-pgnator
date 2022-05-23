import { Header, Footer } from "../../components";
import { Container, MainContainer } from "./styles";

export default function About() {
    return (
        <Container>
            <Header content={"space-between"} none={false} />
            <MainContainer>
                <h1>Your Favorite PGN Tool!</h1>

                <article>
                    <h2>
                        What is a PGN editor and how it can be useful for me?
                    </h2>
                    <p>
                        A PGN editor is a software app where you can edit and
                        create your Portable Game Notation files, you can use it
                        as tool to rewrite your chess games to a highly used
                        format on the most popular chess softwares such as
                        Chess.com, Lichess.org, Chessbase and so on.
                    </p>
                    <p>
                        An usage example can be in case you want to prepare a
                        study on lichess.org but would like to just import your
                        file with comments that you made so here it's
                        ChessPGNator to give you a hand!
                    </p>
                </article>

                <article>
                    <h2>What can I do on ChessPGNator?</h2>
                    <ul>
                        <li>
                            <p>
                                <b>-</b> See your move on move list
                            </p>
                        </li>
                        <li>
                            <p>
                                <b>-</b> Delete your last move (click on the
                                last move)
                            </p>
                        </li>
                        <li>
                            <p>
                                <b>-</b> Comment on the last move
                            </p>
                        </li>
                        <li>
                            <p>
                                <b>-</b> Write some extra information about the
                                game (Details button)
                            </p>
                        </li>
                        <li>
                            <p>
                                <b>-</b> Check out the PGN output in real time
                            </p>
                        </li>
                        <li>
                            <p>
                                <b>-</b> Copy the PGN output
                            </p>
                        </li>
                        <li>
                            <p>
                                <b>-</b> Download the pgn file
                            </p>
                        </li>
                    </ul>
                </article>
            </MainContainer>
        </Container>
    );
}
