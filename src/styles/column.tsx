import styled from "styled-components";

export const Container = styled.div`
    padding: 0 5px;
    height: 100%;
    flex-grow: 0;
    flex-shrink: 0;
    flex-basis: 250px;
    & + div {
        margin-left: 0.5em;
    }
    background: #C0D0DF;

    header {
        height: 42px;
        align-items: center;
        padding: 5px
    }

    h2 {
        font-weight: 700;
        font-size: 20px;
        color: #434E59;
    }

    ul {
        margin-top: 30px;
    }
`
