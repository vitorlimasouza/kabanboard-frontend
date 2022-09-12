import styled from "styled-components";

export const Container = styled.div`
    padding: 0 10px;
    height: 100%
    flex-grow: 0;
    flex-shrink: 0;
    flex-basis: 300px;
    & + div {
        border-left: 1px solid rgba(0, 0, 0, 0.5);
    }

    header {
        height: 42px;
    }

    h2 {
        font-weight: 500;
        font-size: 20px;
        padding: 0 10px
    }

    ul {
        margin-top: 30px;
    }
`