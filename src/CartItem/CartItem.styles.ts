import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    font-family: Arial, Helvetica, sans-serif;
    border-bottom: solid 1px lightblue;
    padding-bottom: 20px;

    h3 {
        max-width: 20rem;
    }

    div {
        flex: 1;
    }

    .information, .buttons {
        display: flex;
        justify-content: space-between;
    }

    img {
        max-width: 10rem;
        object-fit: cover;
        margin-left: 40px;
    }
`;