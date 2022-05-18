import styled from "styled-components";

const Button = styled.button`
    height: 50px;
    width: 160px;

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

export { Button };
