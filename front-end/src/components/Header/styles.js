import styled from "styled-components";

const Container = styled.header`
    display: flex;
    justify-content: ${(props) => props.justify};
    align-items: center;
`;

export { Container };
