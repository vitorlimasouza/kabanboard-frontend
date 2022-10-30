import styled from "styled-components";

export const Input = styled.input`
    width: 200px;
    padding: 5px 10px;
    border: 1px solid black;
    border-radius: 5px;
    margin-bottom: 30px;
    font-size: 20px;

    &&::placeholder{
        color: rpg(0,0,0,0.2);
    }
`

export const Button = styled.button`
    padding: 5px 20px;
    width: 200px;
    background-color: blue;
    cursor: pointer;
    color:#fff;
    border-radius: 10px;
    font-size: 20px;
`

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

export const Painel = styled.div`
    border: 1px solid black;
    width: 300px;
    height: fit-content;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: 0 1px 4px 0 rgba(192, 230, 230, 0.8);
`

export const Header = styled.header`
    width: 100%;
    height: 7vh;
    border: 1px solid black;
    display: flex;
    background-color: #324659;
    margin-bottom: 10px;
`

export const Section = styled.section`
    background-color: #A7C4DF;
    height: 200px;
    border: 1px solid black;

`