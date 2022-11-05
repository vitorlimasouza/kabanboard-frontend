import styled from "styled-components";

export const Bar = styled.header`
    width: 100%;
    height: 5vh;
    border: 1px solid black;
    display: flex;
    justify-content: flex-end;
    background-color: #324659;
    margin-bottom: 10px;
`

export const Profile = styled.div`
    position: relative;
    display: inline-block;
`

export const ProfileShowButton = styled.button`
    padding: 5px 15px;
    width: fit-content;
    margin: 0 15px;
    background-color: transparent;
    cursor: pointer;
    color:#fff;
    border-radius: 5px;
    font-size: 20px;
`