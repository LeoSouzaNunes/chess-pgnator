import styled from "styled-components";

const StyledFooter = styled.footer`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: auto;

    small {
        display: flex;
        align-items: center;

        gap: 30px;
        color: #f1e4d3;
    }

    a {
        color: #f1e4d3;
        transition: 0.3s;
        text-decoration: none;
        :hover {
            color: #e85640;
            transition: 0.3s;
        }
    }
`;

export { StyledFooter };
