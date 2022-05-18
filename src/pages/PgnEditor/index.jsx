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
import { useEffect, useState } from "react";
import { Chess } from "chess.js";

export default function PgnEditor() {
    const [game, setGame] = useState(new Chess());
    const [moveList, setMoveList] = useState([{ fen: "start" }]);
    const [moveIndex, setMoveIndex] = useState(0);
    const [turn, setTurn] = useState("w");
    const [comment, setComment] = useState("");
    const [showHeadersForm, setShowHeadersForm] = useState(false);
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

    function returnFormattedOutput(headersData) {
        const headers = createHeadersDefaultValue({ ...headersData });
        game.header(
            "Event",
            headers.event,
            "Site",
            headers.site,
            "Date",
            headers.date,
            "Round",
            headers.round,
            "White",
            headers.white,
            "Black",
            headers.black,
            "Result",
            headers.result
        );
        const copyright = "\n%Created by ChessPGNator, a free PGN editor";
        const pgnOutput = game.pgn();

        const output = pgnOutput + copyright;

        setOutputData(output);
    }

    useEffect(() => {
        returnFormattedOutput(headersData);
    }, [getPgnOutput]);

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
                                game={game}
                                setGame={setGame}
                                setTurn={setTurn}
                                comment={comment}
                                setComment={setComment}
                                boardOrientation={boardOrientation}
                                moveList={moveList}
                                setMoveList={setMoveList}
                                moveIndex={moveIndex}
                                setMoveIndex={setMoveIndex}
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
                            setBoardOrientation={setBoardOrientation}
                            boardOrientation={boardOrientation}
                            setMoveIndex={setMoveIndex}
                            moveIndex={moveIndex}
                            moveList={moveList}
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

function createHeadersDefaultValue(headersData) {
    const year = headersData.date_year || "????";
    const month = headersData.date_month || "??";
    const day = headersData.date_day || "??";

    return {
        event: headersData.event || "?",
        site: headersData.site || "?",
        date: `${year}.${month}.${day}`,
        round: headersData.round || "?",
        white: headersData.white || "?",
        black: headersData.black || "?",
        result: headersData.result || "*",
    };
}
