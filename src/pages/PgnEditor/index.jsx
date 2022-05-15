import {
    ButtonsContainer,
    Container,
    EditorContainer,
    SettingsContainer,
} from "./styles";
import {
    Header,
    ChessBoardComponent,
    TextArea,
    TurnContainer,
    MoveList,
    HeadersButton,
    PgnButton,
    HeadersForm,
    MoveListButton,
} from "../../components";
import { useState } from "react";

export default function PgnEditor() {
    const [turn, setTurn] = useState("w");
    const [comment, setComment] = useState("");
    const [showHeadersForm, setShowHeadersForm] = useState(false);
    const [moveHistory, setMoveHistory] = useState([]);
    const [boardOrientation, setBoardOrientation] = useState("white");

    return (
        <Container>
            <Header content={"center"} none={true} />
            <EditorContainer>
                <div>
                    <ChessBoardComponent
                        setTurn={setTurn}
                        comment={comment}
                        setComment={setComment}
                        setMoveHistory={setMoveHistory}
                        boardOrientation={boardOrientation}
                    />
                    <TextArea setComment={setComment} comment={comment} />
                </div>
                <SettingsContainer>
                    <TurnContainer turn={turn} />
                    {showHeadersForm ? (
                        <HeadersForm />
                    ) : (
                        <MoveList
                            moveHistory={moveHistory}
                            setBoardOrientation={setBoardOrientation}
                            boardOrientation={boardOrientation}
                        />
                    )}
                    <ButtonsContainer>
                        {showHeadersForm ? (
                            <MoveListButton show={setShowHeadersForm} />
                        ) : (
                            <HeadersButton show={setShowHeadersForm} />
                        )}

                        <PgnButton />
                    </ButtonsContainer>
                </SettingsContainer>
            </EditorContainer>
        </Container>
    );
}
