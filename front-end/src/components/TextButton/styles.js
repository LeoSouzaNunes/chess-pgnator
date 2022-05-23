import styled from "styled-components";

const Text = styled.button`
    all: unset;

    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 1.15rem;
    font-weight: 500;
    color: #f1e4d3;

    padding: 5px 5px;
    transition: 0.3s;

    :hover {
        cursor: pointer;
        border-bottom: 2.5px solid #e85640;
        transition: 0.3s;
    }
`;

export { Text };
