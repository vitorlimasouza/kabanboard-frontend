import styled from "styled-components";

export const Bar = styled.header`
    width: 100%;
    height: 5vh;
    border: 1px solid black;
    display: flex;
    justify-content: space-between;
    position: sticky;
    top: 0;
    z-index: 9999;
    background-color: #324659;
    margin-bottom: 10px;
`

export const Title = styled.h1`
    margin: 0 10px;
    color: #fff;
`

export const Participants = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
`

export const ParticipantsPreview = styled.div`
    width: 100%;
    padding: 0 15px;
    border-radius: 10px;
    height: 100%;
    display: flex;
    justify-content: center;
    cursor: pointer;
    transition: 0.3s;
    &:hover ${this} {
        background-color: rgba(255, 255, 255, 0.25);
        transition: 0.2s;
    }
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