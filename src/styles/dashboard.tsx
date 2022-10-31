import styled from "styled-components";

export const Button = styled.button`
    padding: 10px 15px;
    margin: 15px 10px 15px 50px;
    width: fit-content;
    background-color: blue;
    cursor: pointer;
    color:#fff;
    border-radius: 10px;
    font-size: 20px;
`

export const GridDysplay = styled.div`
    display: grid;
    grid-template-columns: auto auto auto auto;
    grid-auto-rows: minmax(10px, auto);
    gap: 20px;
    padding: 20px;
`
