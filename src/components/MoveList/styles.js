import styled from "styled-components";

const ListContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;

    position: relative;

    width: 90%;
    height: 400px;
    padding-top: 15px;
    background-color: #2d2424;

    border-radius: 3px;
`;

const MovesContainer = styled.ul`
    width: 100%;
    max-height: 340px;

    display: flex;
    flex-direction: column;
    gap: 10px;

    position: relative;
    overflow: scroll;
`;

const Move = styled.li`
    width: 100%;
    height: 15px;

    display: flex;
    justify-content: space-around;
    align-items: center;

    padding-bottom: 2px;

    span {
        display: flex;
        justify-content: center;
        align-items: center;

        width: 25px;

        font-weight: 700;
        font-size: 1.1rem;
        text-align: center;
        color: #f1e4d3;
    }
`;

const ControlPanel = styled.li`
    padding-top: 10px;
    padding-bottom: 10px;

    display: flex;
    justify-content: space-evenly;
    align-items: center;

    position: absolute;
    bottom: 0;

    width: 100%;
    background-color: #2d2424;
`;

const styles = {
    color: "#f1e4d3",
    transition: ".3s",
    "&:hover": {
        cursor: "pointer",
        color: "#e85640",
        transition: ".3s",
    },
};

export { ListContainer, Move, ControlPanel, styles, MovesContainer };
