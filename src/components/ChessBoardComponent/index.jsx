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

    function handlePieceDrop(sourceSquare, targetSquare, piece) {
        let move = null;
        if (comment) {
            game.set_comment(comment);
        }
        if (moveIndex !== moveList.length - 1) {
            return false;
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
