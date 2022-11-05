import { Button, Container, Input, Painel } from "../styles";
import { useState } from "react";
import { login } from "../services/userService";
import { StyledLink } from "../styles/singin";
import { useNavigate } from "react-router-dom";

export const Singin = () => {
    let navigate = useNavigate()

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onSendClick = async (e: any) => {
        e.preventDefault();
        login({email, password})
            .then(response => {
                console.log("Login successful");
                navigate("/dashboard");
            })
            .catch(response =>
                console.log("Login failed")
            )
    };

    return(
        <Container>
            <Painel>
                <div>
                    <p>Email:</p>
                    <Input onChange={e => setEmail(e.target.value)}/>
                </div>

                <div>
                    <p>Senha:</p>
                    <Input type="password" onChange={e => setPassword(e.target.value)}/>
                </div>
                <Button onClick={onSendClick}>Enviar</Button>

                <StyledLink to="/forget-password">Esqueci minha senha</StyledLink>
            </Painel>
        </Container>
    )
} 