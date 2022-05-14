import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;

    gap: 70px;
`;

const EditorContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 20px;

    width: 100%;
`;

const SettingsContainer = styled.div`
    width: 30%;

    display: flex;
    flex-direction: column;
    align-items: center;

    background-color: #241c1c;
    border-radius: 3px;

    overflow: hidden;
`;

export { Container, EditorContainer, SettingsContainer };
