import styled from "styled-components";

const ListContainer = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 5px;

    width: 90%;
    min-height: 200px;
    max-height: 250px;
    margin-top: 20px;
    padding-top: 10px;
    background-color: #2d2424;

    border-radius: 3px;
`;

const Move = styled.li`
    width: 100%;
    height: 15px;

    display: flex;
    justify-content: space-around;
    align-items: center;

    padding-bottom: 2px;

    p {
        font-weight: 700;
        font-size: 1rem;
        color: #f1e4d3;
    }
`;

const ControlPanel = styled.li`
    padding-top: 10px;
    padding-bottom: 10px;

    display: flex;
    justify-content: space-evenly;
    align-items: center;

    margin-top: auto;
`;

const styles = {
    color: "#000",
    transition: ".3s",
    "&:hover": {
        cursor: "pointer",
        color: "#e85640",
        transition: ".3s",
    },
};

export { ListContainer, Move, ControlPanel, styles };
