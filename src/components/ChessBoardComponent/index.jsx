import { Chessboard } from "react-chessboard";
import { style } from "./styles";

export default function ChessBoardComponent({
    game,
    setGame,
    setTurn,
    setMoveHistory,
    setComment,
    comment,
    boardOrientation,
}) {
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
