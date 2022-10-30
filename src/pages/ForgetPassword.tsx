import { useState } from "react";
import { forgetPassword } from "../services/userService";
import { Button, Container, Input, Painel } from "../styles";
import { Description } from "../styles/forgetPassword";

export const ForgetPasswordPage = () => {
    const [email, setEmail] = useState("");

    const handleSendEmailClick = async () => {
        console.log(forgetPassword({email}));
    };

    return (
        <Container>
            <Painel>
                <Description>Enviaremos um email com um link para a redefinição de senha.</Description>
                <div>
                    <p>Email:</p>
                    <Input onChange={e => setEmail(e.target.value)}/>
                </div>
                <Button onClick={handleSendEmailClick}>Enviar email</Button>
            </Painel>
        </Container>
    );
}
