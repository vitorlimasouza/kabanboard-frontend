import styled from "styled-components";

export const Input = styled.input`
    paddig 10px;

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
`