import styled from "styled-components";

export const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
`

export const Painel = styled.div`
    position:fixed;
    background: #fff;
    border: 1px solid black;
    width: 300px;
    height: fit-content;
    padding: 0px 10px 20px 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: 0 1px 4px 0 rgba(192, 230, 230, 0.8);
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);
`

export const CloseButton = styled.button`
    padding: 5px;
    width: fit-content;
    background-color: white;
    cursor: pointer;
    color:#d22;
    border-radius: 10px;
    font-size: 18px;
    align-self: end;
`