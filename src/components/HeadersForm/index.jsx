import { Container, Input } from "./styles";

export default function HeadersForm() {
    return (
        <Container>
            <Input name="event" placeholder="Event" />
            <Input name="site" placeholder="Site" />
            <Input name="date" placeholder="MM/DD/YYYY" />
            <Input name="round" placeholder="Round" />
            <Input name="white" placeholder="White" />
            <Input name="black" placeholder="Black" />
            <Input name="result" placeholder="Result" />
        </Container>
    );
}
