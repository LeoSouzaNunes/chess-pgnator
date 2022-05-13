import styled from "styled-components";

const Button = styled.button`
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

export { Button };
