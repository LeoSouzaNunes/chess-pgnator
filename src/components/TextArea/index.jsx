import { Text } from "./styles";

export default function TextArea({ setComment, comment, disable }) {
    function handleChange(e) {
        const { value } = e.target;
        setComment(value);
    }

    return (
        <Text
            value={comment}
            onChange={handleChange}
            placeholder="comment/annotation"
            disabled={disable}
        ></Text>
    );
}
