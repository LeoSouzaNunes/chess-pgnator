import styled from "styled-components";
import chessImage from "../../assets/strategy.png";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;

    gap: 70px;
`;

const MainContainer = styled.main`
    display: flex;
    flex-direction: column;
    gap: 40px;

    width: 100%;

    background-image: url(${chessImage});
    background-repeat: no-repeat;
    background-size: 200px;
    background-position: 92% 92%;
    background-attachment: fixed;

    overflow-y: scroll;

    h1 {
        font-size: 3rem;
        font-weight: 500;
        color: #f1e4d3;

        padding-bottom: 10px;
    }

    h2 {
        font-size: 1.75rem;
        font-weight: 500;
        color: #f1e4d3;

        margin-bottom: 10px;
    }

    p {
        max-width: 65ch;
        color: #f1e4d3;
        letter-spacing: 0.4px;
        line-height: 1.6;
        font-size: 1.3rem;
    }
`;

export { Container, MainContainer };
