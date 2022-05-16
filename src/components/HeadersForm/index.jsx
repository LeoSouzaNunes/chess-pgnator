import { Container, Input } from "./styles";

export default function HeadersForm({ headersData, setHeadersData }) {
    function handleChange(e) {
        const { name, value } = e.target;

        setHeadersData({ ...headersData, [`${name}`]: value });
    }

    return (
        <Container>
            <Input
                value={headersData.event}
                onChange={handleChange}
                name="event"
                placeholder="Event"
            />
            <Input
                value={headersData.site}
                onChange={handleChange}
                name="site"
                placeholder="Site"
            />
            <Input
                value={headersData.date}
                onChange={handleChange}
                name="date"
                placeholder="MM/DD/YYYY"
            />
            <Input
                value={headersData.round}
                onChange={handleChange}
                name="round"
                placeholder="Round"
            />
            <Input
                value={headersData.white}
                onChange={handleChange}
                name="white"
                placeholder="White"
            />
            <Input
                value={headersData.black}
                onChange={handleChange}
                name="black"
                placeholder="Black"
            />
            <Input
                value={headersData.result}
                onChange={handleChange}
                name="result"
                placeholder="Result"
            />
        </Container>
    );
}
