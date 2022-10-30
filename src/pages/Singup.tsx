import { Button, Input, Container, Painel } from "../styles";
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
                <div>
                    <p>Nome:</p>
                    <Input onChange={e => setFirstName(e.target.value)}/>
                </div>

                <div>
                    <p>Sobrenome:</p>
                    <Input onChange={e => setLastName(e.target.value)}/>
                </div>

                <div>
                    <p>Email:</p>
                    <Input onChange={e => setEmail(e.target.value)}/>
                </div>

                <div>
                    <p>Senha:</p>
                    <Input type="password" onChange={e => setPassword(e.target.value)}/>
                </div>

                <div>
                    <p>Confirmar senha:</p>
                    <Input type="password" onChange={e => setPasswordConfirm(e.target.value)}/>
                </div>

                <Button onClick={onSendClick}>Enviar</Button>
            </Painel>
        </Container>
    )
} 