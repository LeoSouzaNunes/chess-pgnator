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
    HeadersForm,
    PgnOutputComponent,
    ButtonComponent,
} from "../../components";
import { useState } from "react";

export default function PgnEditor() {
    const [turn, setTurn] = useState("w");
    const [comment, setComment] = useState("");
    const [showHeadersForm, setShowHeadersForm] = useState(false);
    const [moveHistory, setMoveHistory] = useState([]);
    const [boardOrientation, setBoardOrientation] = useState("white");
    const [headersData, setHeadersData] = useState({
        event: "",
        site: "",
        date_day: "",
        date_year: "",
        date_month: "",
        round: "",
        white: "",
        black: "",
        result: "",
    });
    const [getPgnOutput, setGetPgnOutput] = useState(false);
    const [outputData, setOutputData] = useState("");

    return (
        <Container>
            <Header content={"center"} none={true} />
            <EditorContainer>
                <div>
                    {outputData && getPgnOutput ? (
                        <PgnOutputComponent outputData={outputData} />
                    ) : (
                        <>
                            <ChessBoardComponent
                                setTurn={setTurn}
                                comment={comment}
                                setComment={setComment}
                                setMoveHistory={setMoveHistory}
                                boardOrientation={boardOrientation}
                                headersData={headersData}
                                getPgnOutput={getPgnOutput}
                                setOutputData={setOutputData}
                            />
                            <TextArea
                                setComment={setComment}
                                comment={comment}
                                disable={getPgnOutput}
                            />
                        </>
                    )}
                </div>
                <SettingsContainer>
                    <TurnContainer turn={turn} />
                    {showHeadersForm ? (
                        <HeadersForm
                            headersData={headersData}
                            setHeadersData={setHeadersData}
                            disable={getPgnOutput}
                        />
                    ) : (
                        <MoveList
                            moveHistory={moveHistory}
                            setBoardOrientation={setBoardOrientation}
                            boardOrientation={boardOrientation}
                        />
                    )}
                    <ButtonsContainer>
                        {showHeadersForm ? (
                            <ButtonComponent
                                setValue={setShowHeadersForm}
                                value={false}
                                text="Move list"
                            />
                        ) : (
                            <ButtonComponent
                                setValue={setShowHeadersForm}
                                value={true}
                                text="Game info"
                            />
                        )}

                        {getPgnOutput ? (
                            <ButtonComponent
                                setValue={setGetPgnOutput}
                                value={false}
                                text="Chessboard"
                            />
                        ) : (
                            <ButtonComponent
                                setValue={setGetPgnOutput}
                                value={true}
                                text="PGN"
                            />
                        )}
                    </ButtonsContainer>
                </SettingsContainer>
            </EditorContainer>
        </Container>
    );
}
