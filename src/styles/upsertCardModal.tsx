import styled from "styled-components";

export const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
    z-index: 9999;
`

export const Painel = styled.div`
    position: fixed;
    background: #fff;
    border: 1px solid black;
    width: 1000px;
    height: 500px;
    padding: 0px 5px 5px 5px;
    display: flex;
    flex-direction: column;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);
    border-radius: 5px;
`

export const PainelContent = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    p{
        font-size: 14px;
        color: #636262;
        font-weight: bold
    }
`

export const CloseButton = styled.button`
    padding: 7px 5px 5px 5px;
    width: fit-content;
    background-color: #fff;
    cursor: pointer;
    color:#d22;
    font-size: 20px;
    opacity: 0.6;
    transition: 0.3s;
    margin: 0 5px;
    &:hover ${this} {
        opacity: 1;
        transition: 0.2s;
    }
`

export const HeaderModal = styled.div`
    display: flex;
    width: 100%;
    padding: 5px;
`

export const MainArea = styled.div`
    display: grid;
    grid-template-columns: 5fr 1fr;
    width: 100%;
    height: 100%;
    padding: 5px;
`

export const SideArea = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    padding: 5px;
`

export const ThinCenteredInput = styled.input`
    width: 100%;
    margin: 0 0 10px 0;
    border: 1px solid black;
    border-radius: 5px;
    padding: 2px 5px;
    color: black;
    text-align: center;
`

export const CardNameInput = styled.input`
    width: 100%;
    padding: 5px 10px;
    margin-bottom: 10px;
    font-size: 20px;
    &&::placeholder{
        color: rpg(0,0,0,0.1);
    }
    &&:focus {
        border: 1px solid #324659;;
        outline: 1;
        border-radius: 5px;
    } 
`

export const CardDescriptionInput = styled.textarea`
    padding: 5px 10px;
    border-radius: 5px;
    font-size: 16px;
    margin: 10px 20px;
    resize: none;
    height: 100%;
    background: #e2e2e2;
    &&::placeholder{
        color: rpg(0,0,0,0.2);
    }
    &&:focus {
        background: #fff;
        border: 1px solid #324659;;
        outline: 1;
        border-radius: 5px;
    } 
`

export const UserDetails = styled.div`
    max-height: 125px;
    overflow: auto;
    display: flex;
    flex-direction: column;
`

export const UsersPainel = styled.div`
    width: 100%;
    flex-direction: column;
    flex-grow: 1;
    justify-content: center;
`

export const UserLabel = styled.div`
    width: 100%;
    margin: 1px 0;
    display: flex;
    justify-content: flex-start;
`

export const UserName = styled.p`
    max-width: 200px;
    max-height: 30px;
    overflow: clip;
    margin-left: 5px;
    font-size: 25px;
`

export const AddUserButton = styled.button`
    padding: 5px 20px;
    background-color: #C0D0DF;
    cursor: pointer;
    color:#4d4848dd;
    border-radius: 5px;
    font-size: 14px;
    margin: 10px 0;
`