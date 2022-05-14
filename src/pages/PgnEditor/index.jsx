import { Container, EditorContainer, SettingsContainer } from "./styles";
import {
    Header,
    ChessBoardComponent,
    TextArea,
    TurnContainer,
    MoveList,
} from "../../components";
import { useState } from "react";

export default function PgnEditor() {
    const [turn, setTurn] = useState("w");

    return (
        <Container>
            <Header content={"center"} none={true} />
            <EditorContainer>
                <div>
                    <ChessBoardComponent setTurn={setTurn} />
                    <TextArea />
                </div>
                <SettingsContainer>
                    <TurnContainer turn={turn} />
                    <MoveList />
                </SettingsContainer>
            </EditorContainer>
        </Container>
    );
}
