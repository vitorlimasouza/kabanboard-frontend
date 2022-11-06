import styled from "styled-components";

export const Label = styled.div`
    width: 100%;
    margin: 1px 0;
    border-radius: 5px;
    position: relative;
    display: flex;
    justify-content: flex-start;
    cursor: pointer;
    transition: 0.3s;
    &:hover ${this} {
        background-color: rgba(0, 100, 0, 0.25);
        transition: 0.2s;
    }
`

export const AddSignal = styled.p`
    position: absolute;
    right: 0.5em;
    align-self: center;
    font-size: 20px;
    color: #0a0
`