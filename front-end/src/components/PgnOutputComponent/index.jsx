import {
    PgnOutputContainer,
    InputReadOnly,
    ButtonsContainer,
    Button,
} from "./styles";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useState } from "react";

export default function PgnOutputComponent({
    outputData,
    setGetPgnOutput,
    game,
    setMoveList,
    setMoveIndex,
    setTurn,
    moveList,
}) {
    const [copied, setCopied] = useState(false);

    function handleReset() {
        if (moveList.length <= 1) return;
        game.reset();
        setMoveList([{ fen: "start" }]);
        setMoveIndex(0);
        setTurn("w");
        setGetPgnOutput(false);
    }

    return (
        <PgnOutputContainer>
            <h1>Output</h1>
            <InputReadOnly type="text" value={outputData} readOnly />
            <ButtonsContainer>
                <CopyToClipboard
                    text={outputData}
                    onCopy={() => {
                        setCopied(true);
                    }}
                >
                    <Button>{!copied ? "Copy" : "Copied!"}</Button>
                </CopyToClipboard>
                <a
                    href={
                        "data:application/vnd.chess-pgn," +
                        encodeURIComponent(outputData)
                    }
                    download={`ChessPGNator_game.pgn`}
                >
                    <Button>Download</Button>
                </a>
                <Button disabled={moveList.length <= 1} onClick={handleReset}>
                    Reset
                </Button>
            </ButtonsContainer>
        </PgnOutputContainer>
    );
}
