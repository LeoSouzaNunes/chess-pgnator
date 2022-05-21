import { useEffect } from "react";
import { Chessboard } from "react-chessboard";
import { style } from "./styles";

export default function ChessBoardComponent({
    game,
    setGame,
    setTurn,
    setComment,
    comment,
    boardOrientation,
    moveList,
    setMoveList,
    moveIndex,
    setMoveIndex,
    deleteLastMove,
    setDeleteLastMove,
    setShowLastMoveOptions,
}) {
    useEffect(() => {
        if (deleteLastMove) {
            let moves = [...moveList];
            moves.pop();
            setMoveIndex(moves.length - 1);
            setMoveList(moves);
            game.undo();
            setTurn(game.turn());
            setDeleteLastMove(false);
            setShowLastMoveOptions(false);
        }
    }, [deleteLastMove]);

    function safeGameMutate(modify) {
        setGame((g) => {
            const actualPosition = { ...g };
            modify(actualPosition);
            return actualPosition;
        });
    }

    function isValidToPromote(sourceSquare, targetSquare, piece) {
        const possibleMoves = game.moves({ square: sourceSquare });
        const blackPawnCondition =
            piece === "bP" &&
            sourceSquare[1] === "2" &&
            targetSquare[1] === "1" &&
            game.turn() === "b";
        const whitePawnCondition =
            piece === "wP" &&
            sourceSquare[1] === "7" &&
            targetSquare[1] === "8" &&
            game.turn() === "w";
        if (
            (blackPawnCondition || whitePawnCondition) &&
            isValidPromotionSquare(possibleMoves, targetSquare)
        )
            return true;
        else return false;
    }

    function isValidPromotionSquare(possibleMoves, targetSquare) {
        if (!possibleMoves.length || possibleMoves.length > 12) return false;
        for (const move of possibleMoves) {
            if (move.includes(targetSquare)) return true;
        }
        return false;
    }

    function handlePieceDrop(sourceSquare, targetSquare, piece) {
        let move = null;
        if (comment) {
            game.set_comment(comment);
        }
        if (moveIndex !== moveList.length - 1) {
            return false;
        }

        let pieceToPromote = "q";
        if (isValidToPromote(sourceSquare, targetSquare, piece)) {
            const options = ["q", "n", "b", "r"];
            pieceToPromote = prompt(
                "Enter with the piece to promote: q, n, b or r"
            ).toLowerCase();
            if (!options.includes(pieceToPromote)) pieceToPromote = "q";
        }
        safeGameMutate((game) => {
            move = game.move({
                from: sourceSquare,
                to: targetSquare,
                promotion: pieceToPromote,
            });
        });

        if (!move) {
            return false;
        }
        const lastMove = game.history().pop();
        const fen = game.fen();
        setMoveList([...moveList, { move: lastMove, fen }]);
        setMoveIndex(moveIndex + 1);
        setComment("");
        setTurn(game.turn());
        return true;
    }
    return (
        <Chessboard
            position={moveList[moveIndex].fen}
            boardWidth={500}
            customBoardStyle={style}
            onPieceDrop={handlePieceDrop}
            boardOrientation={boardOrientation}
        />
    );
}
