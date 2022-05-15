import { Button } from "./styles";

export default function MoveListButton({ show }) {
    return (
        <Button
            onClick={() => {
                show(false);
            }}
        >
            Move list
        </Button>
    );
}
