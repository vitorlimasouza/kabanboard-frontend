import styled from "styled-components";

export const Painel = styled.div`
    position: absolute;
    width: 300px;
    height: fit-content;
    border: 1px solid black;
    padding: 10px;
    transform: translate(0, 5vh);
    flex-direction: column;
    justify-content: center;
    box-shadow: 0 1px 4px 0 rgba(192, 230, 230, 0.8);
    background: #324659;
`;

export const ParticipantsDetails = styled.div`
    max-height: 230px;
    overflow: auto;
    display: flex;
    flex-direction: column;
`

export const UserLabel = styled.div`
    width: 100%;
    padding: 0 15px;
    display: flex;
    justify-content: flex-start;
`

export const UserName = styled.p`
    margin-left: 15px;
    font-size: 25px;
    color: white;
`

export const AddUserContainer = styled.div`
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
`

export const Field = styled.textarea`
    width: 85%;
    height: 30px;
    resize: none;
    padding: 2px 5px;
    margin: 0 5px 0 0;
    border: 1px solid gray;
    border-radius: 5px;
    flex-grow: 1;
    font-size: 20px;
    white-space: nowrap;
    
    &:focus ${this}{
        border: 1px solid black;
    }
`

export const Button = styled.button`
    width: 30px;
    height: 30px;
    padding: 5px 5px;
    border-radius: 10px;
    font-size: 15px;
    background-color: blue;
    color:#fff;
    cursor: pointer;
`

export const LeaveButton = styled.button`
    width: 100%;
    height: 30px;
    padding: 5px 5px;
    margin-top: 10px;
    border-radius: 10px;
    font-size: 15px;
    background-color: indianred;
    color:#fff;
    cursor: pointer;
`
