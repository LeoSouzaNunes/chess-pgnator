import { Button } from "./styles";

export default function HeadersButton({ show }) {
    return (
        <Button
            onClick={() => {
                show(true);
            }}
        >
            Game Info
        </Button>
    );
}
