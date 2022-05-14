import { ListContainer, Move, ControlPanel, styles } from "./styles";
import FastRewindRoundedIcon from "@mui/icons-material/FastRewindRounded";
import FastForwardRoundedIcon from "@mui/icons-material/FastForwardRounded";
import SkipPreviousRoundedIcon from "@mui/icons-material/SkipPreviousRounded";
import SkipNextRoundedIcon from "@mui/icons-material/SkipNextRounded";
import FlipCameraAndroidRoundedIcon from "@mui/icons-material/FlipCameraAndroidRounded";

export default function MoveList() {
    return (
        <ListContainer>
            <Move>
                <p>1</p>
                <p>e4</p>
                <p>e5</p>
            </Move>
            <ControlPanel>
                <FastRewindRoundedIcon sx={styles} />
                <SkipPreviousRoundedIcon sx={styles} />
                <FlipCameraAndroidRoundedIcon sx={styles} />
                <SkipNextRoundedIcon sx={styles} />
                <FastForwardRoundedIcon sx={styles} />
            </ControlPanel>
        </ListContainer>
    );
}
