import styled from "styled-components";

export const Painel = styled.div`
    position: absolute;
    width: 300px;
    height: fit-content;
    border: 1px solid black;
    padding: 10px;
    transform: translate(-230px,0);
    box-shadow: 0 1px 4px 0 rgba(192, 230, 230, 0.8);
    background: #fff;
`

export const Field = styled.textarea`
    width: 100%;
    height: 30px;
    resize: none;
    padding: 0;
    border-bottom: 1px solid gray;
    margin-bottom: 10px;
    font-size: 20px;
    white-space: nowrap;
    
    &:focus ${this}{
        border-bottom: 2px solid black;
    }
`

export const Button = styled.button`
    width: 100%;
    padding: 5px 20px;
    border-radius: 10px;
    margin-top: 20px;
    font-size: 20px;
    background-color: blue;
    color:#fff;
    cursor: pointer;
`