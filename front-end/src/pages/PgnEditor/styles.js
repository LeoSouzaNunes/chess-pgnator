import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 100vh;
`;

const EditorContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 20px;
    padding-top: 70px;

    width: 100%;
`;

const SettingsContainer = styled.div`
    width: 30%;
    height: 565px;

    display: flex;
    flex-direction: column;
    align-items: center;

    background-color: #241c1c;
    border-radius: 3px;

    overflow: hidden;
`;

const ButtonsContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;

    padding: 15px 10px;
    width: 100%;
    margin-top: auto;
`;

export { Container, EditorContainer, SettingsContainer, ButtonsContainer };
