import { Button, Input } from "../styles";
import { CloseButton, Container, Painel } from "../styles/createBoardModal";
import { createBoard } from "../services/boardService";
import { useState } from "react";
import "../styles/global.css"

type Params = {
    show: boolean,
    handleClose: () => void
}

export const CreateBoardModal = ({show, handleClose}:Params) => {
    const [boardName, setBoardName] = useState("");

    const showHideClassName = show ? "display-block" : "display-none";

    const onCreateClick = async () => {
        await createBoard({name: boardName})
            .then(response =>
                console.log("Board creation successful")
            )
            .catch(response =>
                console.log("Board creation failed")
            )
    }

    return(
        <Container className={showHideClassName}>
            <Painel>
                <CloseButton onClick={handleClose}>x</CloseButton>
                <div>
                    <p>Nome do quadro</p>
                    <Input onChange={e => setBoardName(e.target.value)}></Input>
                </div>
                <Button onClick={onCreateClick}>Criar</Button>
            </Painel>
        </Container>
    );
}