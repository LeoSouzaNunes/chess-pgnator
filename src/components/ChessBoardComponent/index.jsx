import { Chessboard } from "react-chessboard";
import { Chess } from "chess.js";
import { useState } from "react";
import { style } from "./styles";

export default function ChessBoardComponent({ setTurn }) {
    const [game, setGame] = useState(new Chess());
    setTurn(game.turn());
    function safeGameMutate(modify) {
        setGame((g) => {
            const actualPosition = { ...g };
            modify(actualPosition);
            return actualPosition;
        });
    }

    function handlePieceDrop(sourceSquare, targetSquare, piece) {
        let move = null;
        safeGameMutate((game) => {
            move = game.move({
                from: sourceSquare,
                to: targetSquare,
            });
        });

        if (!move) {
            return false;
        }

        return true;
    }

    function returnFormattedOutput() {
        game.header(
            "Event",
            "",
            "Site",
            "",
            "Date",
            "",
            "Round",
            "",
            "White",
            "",
            "Black",
            "",
            "Result",
            ""
        );
        const copyright = "\n%Created by ChessPGNator, a free PGN editor";
        const pgnOutput = game.pgn();

        const output = pgnOutput + copyright;
    }

    return (
        <Chessboard
            position={game.fen()}
            boardWidth={500}
            customBoardStyle={style}
            onPieceDrop={handlePieceDrop}
        />
    );
}