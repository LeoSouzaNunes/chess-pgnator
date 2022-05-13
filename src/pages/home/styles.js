import styled from "styled-components";

const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;

    gap: 200px;
`;

const MainSection = styled.main`
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    gap: 50px;

    h1 {
        font-size: 3.5rem;
        font-weight: 500;
        letter-spacing: 0.0125rem;
        line-height: -15px;
        color: #f1e4d3;
        b {
            color: #e85640;
        }
    }

    p {
        font-size: 1.5rem;
        font-weight: 400;
        color: #f1e4d3;
    }
`;

const MainContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    gap: 40px;
`;

const TryNowButton = styled.button`
    all: unset;

    height: 30px;
    width: 120px;

    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 1.025rem;
    font-weight: 700;
    color: #f1e4d3;

    padding: 5px 5px;

    background-color: #e85640;
    border-radius: 30px;
    border: 1.5px solid #f1e4d3;
    transition: 0.4s;

    :hover {
        cursor: pointer;
        border-color: #e85640;
        background-color: #f1e4d3;
        color: #e85640;
        transition: 0.4s;
    }
`;

export { HomeContainer, MainSection, MainContentContainer, TryNowButton };
