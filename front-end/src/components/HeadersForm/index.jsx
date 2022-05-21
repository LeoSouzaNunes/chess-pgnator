import { Container, Input, SelectResult, DateContainer } from "./styles";

export default function HeadersForm({ headersData, setHeadersData, disable }) {
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
                disabled={disable}
            />
            <Input
                value={headersData.site}
                onChange={handleChange}
                name="site"
                placeholder="Site"
                disabled={disable}
            />
            <DateContainer>
                <Input
                    value={headersData.date_year}
                    onChange={handleChange}
                    name="date_year"
                    placeholder="YYYY"
                    disabled={disable}
                />
                <Input
                    value={headersData.date_day}
                    onChange={handleChange}
                    name="date_day"
                    placeholder="DD"
                    disabled={disable}
                />
                <Input
                    value={headersData.date_month}
                    onChange={handleChange}
                    name="date_month"
                    placeholder="MM"
                    disabled={disable}
                />
            </DateContainer>
            <Input
                value={headersData.round}
                onChange={handleChange}
                name="round"
                placeholder="Round"
                disabled={disable}
            />
            <Input
                value={headersData.white}
                onChange={handleChange}
                name="white"
                placeholder="White"
                disabled={disable}
            />
            <Input
                value={headersData.black}
                onChange={handleChange}
                name="black"
                placeholder="Black"
                disabled={disable}
            />
            <SelectResult
                value={headersData.result}
                onChange={handleChange}
                name="result"
                disabled={disable}
            >
                <option value="">Result</option>
                <option value="1-0">1-0</option>
                <option value="1/2-1/2">1/2-1/2</option>
                <option value="0-1">0-1</option>
            </SelectResult>
        </Container>
    );
}
