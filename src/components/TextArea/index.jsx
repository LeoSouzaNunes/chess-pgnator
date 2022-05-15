import { Text } from "./styles";

export default function TextArea({ setComment, comment }) {
    function handleChange(e) {
        const { value } = e.target;
        setComment(value);
    }

    return (
        <Text
            value={comment}
            onChange={handleChange}
            placeholder="comment/annotation"
        ></Text>
    );
}
