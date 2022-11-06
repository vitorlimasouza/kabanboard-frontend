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
    padding: 0px 10px 10px 10px;
    display: flex;
    flex-direction: column;
    // justify-content: space-between;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);
`

export const PainelContent = styled.div`
    display: flex;
    height: 100%
`

export const CloseButton = styled.button`
    padding: 5px;
    width: fit-content;
    background-color: white;
    cursor: pointer;
    color:#d22;
    font-size: 20px;
    align-self: end;
    opacity: 0.6;
    transition: 0.3s;
    &:hover ${this} {
        opacity: 1;
        transition: 0.2s;
    }
`

export const MainArea = styled.div`
    display: flex;
    flex-direction: column;
    width: 75%;
    height: 100%;
    padding: 5px;
`

export const SideArea = styled.div`
    width: 25%;
    height: 100%;
    padding: 5px;
`

export const CardNameInput = styled.input`
    width: 100%;
    padding: 5px 10px;
    border: 1px solid black;
    border-radius: 5px;
    margin-bottom: 10px;
    font-size: 20px;
    &&::placeholder{
        color: rpg(0,0,0,0.2);
    }
`

export const CardDescriptionInput = styled.textarea`
    width: 100%;
    flex-grow: 1;
    padding: 5px 10px;
    border: 1px solid black;
    border-radius: 5px;
    margin-bottom: 10px;
    font-size: 16px;
    resize: none;
    &&::placeholder{
        color: rpg(0,0,0,0.2);
    }
`

export const UserDetails = styled.div`
    max-height: 230px;
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
    width: 100%;
    margin-top: 10px;
    background-color: blue;
    cursor: pointer;
    color:#fff;
    border-radius: 10px;
    font-size: 20px;
`