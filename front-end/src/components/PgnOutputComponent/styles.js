import styled from "styled-components";

const PgnOutputContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    width: 500px;
    height: 100%;

    padding: 15px 20px 5px 20px;

    background-color: #241c1c;
    border-radius: 3px;

    h1 {
        padding-top: 12px;
        font-weight: 700;
        font-size: 1.5rem;
        color: #f1e4d3;
    }
`;

const InputReadOnly = styled.textarea`
    padding: 10px 10px;

    margin-top: 25px;

    width: 100%;
    height: 400px;

    background-color: #2d2424;
    color: #f1e4d3;
    font-size: 0.9rem;
    font-weight: 400;

    resize: none;
    border-radius: 3px;
    border-style: none;

    ::placeholder {
        color: #2d2424;
        font-weight: 700;
    }

    :focus {
        outline: none;
    }
`;

const ButtonsContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;

    gap: 10px;

    padding: 10px 5px;
    width: 100%;
    margin-top: auto;

    a {
        text-decoration: none;
    }

    :last-child {
        margin-left: auto;
    }
`;

const Button = styled.button`
    height: 50px;
    width: 100px;

    font-size: 1.025rem;
    font-weight: 700;
    color: #f1e4d3;

    display: flex;
    justify-content: center;
    align-items: center;

    padding: 5px 5px;

    background-color: #e85640;
    border-radius: 10px;
    border: 1.5px solid #f1e4d3;
    transition: 0.25s;

    :hover {
        cursor: pointer;
        border-color: #e85640;
        background-color: #f1e4d3;
        color: #e85640;
        transition: 0.25s;
    }
`;
export { PgnOutputContainer, InputReadOnly, ButtonsContainer, Button };
