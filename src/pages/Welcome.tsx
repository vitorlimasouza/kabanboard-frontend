import { Container, Painel } from "../styles";
import {StyledLink, Title} from "../styles/welcome";

export const Welcome = () => {
    return (
        <Container>
            <Painel>
                <Title>Seja bem vindo!</Title>

                <StyledLink to="/singin">Entrar</StyledLink>

                <StyledLink to="/singup">Cadastrar-se</StyledLink>
            </Painel>
        </Container>
    );
}