import styled from "styled-components";

const Form = styled.form`
    display: flex;
    width: 300px;

    flex-direction: column;

    gap: 20px;

    padding: 20px 0px;

    h1 {
        font-size: 3rem;
        font-weight: 500;
        color: #f1e4d3;

        padding-bottom: 10px;
    }

    p {
        max-width: 65ch;
        color: #f1e4d3;
        letter-spacing: 0.4px;
        line-height: 1.6;
        font-size: 1.3rem;
    }
`;

const Input = styled.input`
    all: unset;

    font-size: 1rem;
    color: #2d2424;
    background-color: #f1e4d3;
    padding: 10px 5px;
    border-radius: 3px;
    border-style: none;
    ::placeholder {
        font-weight: 700;
        color: #2d2424;
    }

    :focus {
        outline: none;
        border: 1.5px solid #e85640;
    }
`;

const TextArea = styled.textarea`
    all: unset;

    height: 150px;

    padding: 5px 5px;
    background-color: #f1e4d3;
    color: #2d2424;

    resize: none;
    border-radius: 3px;
    border-style: none;

    ::placeholder {
        font-weight: 700;
        color: #2d2424;
    }

    :focus {
        outline: none;
        border: 1.5px solid #e85640;
    }
`;

const Button = styled.button`
    width: 50%;

    font-size: 1.025rem;
    font-weight: 700;
    color: #f1e4d3;

    display: flex;
    justify-content: center;
    align-items: center;

    padding: 10px 0px;

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

export { Form, Input, TextArea, Button };
