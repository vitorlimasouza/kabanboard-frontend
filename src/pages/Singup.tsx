import { Button, Input, Painel, Container } from "../styles";
import { useState } from "react";
import { createUser, login } from "../services/userService";

export const Singup = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");

    const onSendClick = async (e: any) => {
        e.preventDefault();

        if (password === passwordConfirm) {
            createUser({firstName, lastName, email, password})
                .then(response => {
                    login({email, password})
                    console.log("Sucess on create user")
                })
                .catch(response =>
                    console.log("Fail on create user")
                )
        } else {
            console.log("Password not match")
        }

    };

    return(
        <Container>
            <Painel>
                <label>Nome:</label>
                <Input onChange={e => setFirstName(e.target.value)}/>

                <label>Sobrenome:</label>
                <Input onChange={e => setLastName(e.target.value)}/>

                <label>Email:</label>
                <Input onChange={e => setEmail(e.target.value)}/>

                <label>Senha:</label>
                <Input type="password" onChange={e => setPassword(e.target.value)}/>

                <label>Confirmar senha:</label>
                <Input type="password" onChange={e => setPasswordConfirm(e.target.value)}/>

                <Button onClick={onSendClick}>Enviar</Button>
            </Painel>
        </Container>
    )
} 