import { Button, Container, Input, Painel } from "../styles";
import {useState} from "react";
import {login} from "../services/userService";
import {Link} from "react-router-dom";

export const Singin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onSendClick = async (e: any) => {
        e.preventDefault();
        console.log(login({email, password}));
    };

    return(
        <Container>
            <Painel>
                <label>Email</label>
                <Input onChange={e => setEmail(e.target.value)}/>

                <label>Senha</label>
                <Input type="password" onChange={e => setPassword(e.target.value)}/>
                <Button onClick={onSendClick}>Enviar</Button>

                <Link to="/forget-password">Esqueci minha senha</Link>
            </Painel>
        </Container>
    )
} 