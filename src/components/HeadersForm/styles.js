import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;

    width: 90%;
    padding: 15px 15px;
    background-color: #2d2424;

    border-radius: 3px;
`;

const Input = styled.input`
    width: 100%;

    padding: 5px 5px;
    background-color: #f1e4d3;
    color: #2d2424;

    border-radius: 3px;
    border-style: none;

    ::placeholder {
        color: #2d2424;
        font-weight: 700;
    }

    :focus {
        outline: none;
        border: 1.5px solid #e85640;
    }
`;

export { Container, Input };
