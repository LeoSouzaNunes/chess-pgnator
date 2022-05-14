import styled from "styled-components";

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    font-weight: 700;
    font-size: 1.5rem;
    color: ${(props) => (props.colorToMove === "w" ? "#2D2424" : "#f1e4d3")};

    width: 100%;
    height: 80px;

    background-color: ${(props) =>
        props.colorToMove === "w" ? "#f1e4d3" : "#100c0c"};
    transition: 0.1s;
`;

export default Container;
