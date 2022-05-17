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
    headersData,
    getPgnOutput,
    setOutputData,
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
                promotion: "q",
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
        console.log("On ChessBoard", output);
        setOutputData(output);
    }

    if (getPgnOutput) returnFormattedOutput(headersData);

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
