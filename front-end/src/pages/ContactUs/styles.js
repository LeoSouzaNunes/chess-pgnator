import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;

    min-height: 100vh;
`;

const MainContainer = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;
    padding-top: 100px;

    div {
        display: flex;
        flex-direction: column;

        padding: 20px 30px 5px 30px;

        background-color: #241c1c;
        border-radius: 3px;
    }

    h1 {
        font-size: 2.5rem;
        font-weight: 500;
        color: #f1e4d3;

        padding-bottom: 10px;
    }

    p {
        max-width: 65ch;
        color: #f1e4d3;
        letter-spacing: 0.4px;
        line-height: 1.6;
        font-size: 1.2rem;

        padding-bottom: 30px;
    }
`;

export { Container, MainContainer };
