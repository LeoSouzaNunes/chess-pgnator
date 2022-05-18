import { Button } from "./styles";

export default function ButtonComponent({ text, setValue, value }) {
    return (
        <Button
            onClick={() => {
                setValue(value);
            }}
        >
            {text}
        </Button>
    );
}
