import styled from "styled-components";

const Container = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const LogoTitle = styled.span`
    font-family: "Lexend", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 2.25rem;
    color: #f1e4d3;
    cursor: pointer;

    b {
        color: #e85640;
    }
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

export { Container, LogoTitle, TryNowButton };
