import styled from "styled-components";

const Container = styled.header`
    display: flex;
    justify-content: ${(props) => props.justify};
    align-items: center;
`;

const ButtonsContainer = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    gap: 20px;
`;

export { Container, ButtonsContainer };
