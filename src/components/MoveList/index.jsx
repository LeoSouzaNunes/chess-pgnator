import {
    ListContainer,
    Move,
    ControlPanel,
    styles,
    MovesContainer,
} from "./styles";
import FastRewindRoundedIcon from "@mui/icons-material/FastRewindRounded";
import FastForwardRoundedIcon from "@mui/icons-material/FastForwardRounded";
import SkipPreviousRoundedIcon from "@mui/icons-material/SkipPreviousRounded";
import SkipNextRoundedIcon from "@mui/icons-material/SkipNextRounded";
import FlipCameraAndroidRoundedIcon from "@mui/icons-material/FlipCameraAndroidRounded";

export default function MoveList({
    moveHistory,
    setBoardOrientation,
    boardOrientation,
}) {
    const actualOrientation = boardOrientation === "white" ? "black" : "white";
    const moves = formatMoveList(moveHistory);

    return (
        <ListContainer>
            <MovesContainer>
                {moves?.map((move, index) => (
                    <Move key={index}>
                        <span>{index + 1}</span>
                        <span>{move.w}</span>
                        <span>{move.b || "..."}</span>
                    </Move>
                ))}
            </MovesContainer>
            <ControlPanel>
                <FastRewindRoundedIcon sx={styles} />
                <SkipPreviousRoundedIcon sx={styles} />
                <FlipCameraAndroidRoundedIcon
                    sx={styles}
                    onClick={() => {
                        setBoardOrientation(actualOrientation);
                    }}
                />
                <SkipNextRoundedIcon sx={styles} />
                <FastForwardRoundedIcon sx={styles} />
            </ControlPanel>
        </ListContainer>
    );
}

function formatMoveList(moves) {
    let formattedMoveList = [];
    for (let i = 0; i < moves.length; i += 2) {
        const wMove = moves[i];
        const bMove = moves[i + 1];
        formattedMoveList.push({ w: wMove, b: bMove });
    }
    return formattedMoveList;
}
