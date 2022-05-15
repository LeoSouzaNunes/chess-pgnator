import { Chessboard } from "react-chessboard";
import { Chess } from "chess.js";
import { useState } from "react";
import { style } from "./styles";

export default function ChessBoardComponent({
    setTurn,
    setMoveHistory,
    setComment,
    comment,
    boardOrientation,
}) {
    const [game, setGame] = useState(new Chess());
    function safeGameMutate(modify) {
        setGame((g) => {
            const actualPosition = { ...g };
            modify(actualPosition);
            return actualPosition;
        });
    }

    function handlePieceDrop(sourceSquare, targetSquare, piece) {
        let move = null;
        if (comment) {
            game.set_comment(comment);
        }
        safeGameMutate((game) => {
            move = game.move({
                from: sourceSquare,
                to: targetSquare,
            });
        });

        if (!move) {
            return false;
        }
        setMoveHistory(game.history());
        setComment("");
        setTurn(game.turn());
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
        console.log(output);
    }

    return (
        <Chessboard
            position={game.fen()}
            boardWidth={500}
            customBoardStyle={style}
            onPieceDrop={handlePieceDrop}
            boardOrientation={boardOrientation}
        />
    );
}
