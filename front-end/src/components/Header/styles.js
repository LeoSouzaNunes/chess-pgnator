import styled from "styled-components";

const Container = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding-top: 25px;
`;

const ButtonsContainer = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    gap: 20px;
`;

export { Container, ButtonsContainer };
