import styled from "styled-components";

const Text = styled.textarea`
    margin-top: 15px;

    width: 500px;
    height: 50px;

    padding: 5px 5px;
    background-color: #f1e4d3;
    color: #2d2424;

    resize: none;
    border-radius: 3px;
    border-style: none;

    ::placeholder {
        color: #2d2424;
    }

    :focus {
        outline: none;
        border: 1.5px solid #e85640;
    }
`;

export { Text };
