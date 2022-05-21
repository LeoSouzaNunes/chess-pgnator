import {
    ListContainer,
    Move,
    ControlPanel,
    styles,
    MovesContainer,
    DeleteMove,
} from "./styles";
import FastRewindRoundedIcon from "@mui/icons-material/FastRewindRounded";
import FastForwardRoundedIcon from "@mui/icons-material/FastForwardRounded";
import SkipPreviousRoundedIcon from "@mui/icons-material/SkipPreviousRounded";
import SkipNextRoundedIcon from "@mui/icons-material/SkipNextRounded";
import FlipCameraAndroidRoundedIcon from "@mui/icons-material/FlipCameraAndroidRounded";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import { useEffect, useState } from "react";

export default function MoveList({
    setBoardOrientation,
    boardOrientation,
    setMoveIndex,
    moveIndex,
    moveList,
    setDeleteLastMove,
    showLastMoveOptions,
    setShowLastMoveOptions,
}) {
    const [isAtStart, setIsAtStart] = useState(false);
    const [isAtEnd, setIsAtEnd] = useState(false);
    const actualOrientation = boardOrientation === "white" ? "black" : "white";
    const moves = formatMoveList(moveList, moveIndex);

    useEffect(() => {
        setShowLastMoveOptions(false);
        if (moveIndex === 0 && moveList.length > 1) {
            setIsAtStart(true);
            setIsAtEnd(false);
        } else if (moveIndex === moveList.length - 1 && moveList.length > 1) {
            setIsAtEnd(true);
            setIsAtStart(false);
        } else if (moveList.length === 1) {
            setIsAtStart(true);
            setIsAtEnd(true);
        } else {
            setIsAtEnd(false);
            setIsAtStart(false);
        }
    }, [moveIndex]);

    function moveOneByOneBackwards() {
        if (isAtStart) return;
        setMoveIndex(moveIndex - 1);
    }

    function moveOneByOneForwards() {
        if (isAtEnd) return;
        setMoveIndex(moveIndex + 1);
    }

    function clickMoveHandler(lastMove) {
        if (lastMove !== moveList[moveList.length - 1].move) return;
        setShowLastMoveOptions(true);
    }
    return (
        <ListContainer>
            <MovesContainer>
                {moves?.map((move, index) => (
                    <Move key={index}>
                        <span>{index + 1}</span>
                        <span>
                            {move.highlight[0] && move.highlight[1] === "w" ? (
                                <b
                                    onClick={() => {
                                        clickMoveHandler(move.w);
                                    }}
                                >
                                    {showLastMoveOptions ? (
                                        <DeleteMove show={showLastMoveOptions}>
                                            <DeleteRoundedIcon
                                                onClick={() => {
                                                    setDeleteLastMove(true);
                                                }}
                                                sx={{ color: "#e85640" }}
                                            />
                                        </DeleteMove>
                                    ) : (
                                        move.w
                                    )}
                                </b>
                            ) : (
                                move.w
                            )}
                        </span>
                        <span>
                            {move.highlight[0] && move.highlight[1] === "b" ? (
                                <b
                                    onClick={() => {
                                        clickMoveHandler(move.b);
                                    }}
                                >
                                    {showLastMoveOptions ? (
                                        <DeleteMove show={showLastMoveOptions}>
                                            <DeleteRoundedIcon
                                                onClick={() => {
                                                    setDeleteLastMove(true);
                                                }}
                                                sx={{ color: "#e85640" }}
                                            />
                                        </DeleteMove>
                                    ) : (
                                        move.b
                                    )}
                                </b>
                            ) : (
                                move.b
                            )}
                        </span>
                    </Move>
                ))}
            </MovesContainer>
            <ControlPanel>
                <FastRewindRoundedIcon
                    onClick={() => {
                        setMoveIndex(0);
                    }}
                    sx={styles}
                    disabled={isAtStart}
                />
                <SkipPreviousRoundedIcon
                    onClick={moveOneByOneBackwards}
                    sx={styles}
                />
                <FlipCameraAndroidRoundedIcon
                    sx={styles}
                    onClick={() => {
                        setBoardOrientation(actualOrientation);
                    }}
                />
                <SkipNextRoundedIcon
                    onClick={moveOneByOneForwards}
                    sx={styles}
                />
                <FastForwardRoundedIcon
                    onClick={() => {
                        setMoveIndex(moveList.length - 1);
                    }}
                    sx={styles}
                    disabled={isAtEnd}
                />
            </ControlPanel>
        </ListContainer>
    );
}

function formatMoveList(moves, actualIndex) {
    let formattedMoveList = [];
    for (let i = 1; i < moves.length; i += 2) {
        const wMove = moves[i].move;
        const bMove = moves[i + 1]?.move;

        if (actualIndex === i) {
            formattedMoveList.push({
                w: wMove,
                b: bMove || "",
                highlight: [true, "w"],
            });
            continue;
        }

        if (actualIndex === i + 1 && bMove) {
            formattedMoveList.push({
                w: wMove,
                b: bMove,
                highlight: [true, "b"],
            });
            continue;
        }

        formattedMoveList.push({
            w: wMove,
            b: bMove || "",
            highlight: [false, ""],
        });
    }
    return formattedMoveList;
}
