import { Link } from "react-router-dom";
import { Container } from "../styles/column";
import { Painel } from "../styles";

export const Welcome = () => {
    return (
        <Container>
            <Painel>
                <h1>Seja bem vindo!</h1>
                <br/>
                <Link to="/singin">Entrar</Link>
                <br/>
                <Link to="/singup">Cadastrar-se</Link>
            </Painel>
        </Container>
    );
}