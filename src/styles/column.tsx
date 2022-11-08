import styled, { css } from "styled-components";

export interface Props {
    canDrop?: boolean,
    isHovered?: boolean
}

export const Container = styled.div`
    padding: 0 5px;
    margin: 5px 10px;
    height: 100%;
    flex-grow: 1;
    flex-shrink: 0;
    flex-basis: 250px;
    background: #C0D0DF;
    & + div {
        margin-left: 0.5em;
    }

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
        margin-top: 10px;
    }
    
    ${(props: Props) => props.canDrop === true && css`
        opacity: 0.6;
        transition: 0.3s;
    `}
    
    ${(props: Props) => props.isHovered && css`
        opacity: 1;
        transition: 0.1s;
    `}
`

export const ColumnHeader = styled.header`
    display: flex;
    justify-content: space-between;
`

export const Button = styled.button`
    padding: 5px 5px;
    width: fit-content;
    background-color: transparent;
    cursor: pointer;
    color:#000;
    border-radius: 10px;
    font-size: 20px;
    opacity: 0.6;
    transition: 0.3s;
    &:hover ${this} {
        opacity: 1;
        transition: 0.2s;
    }
`