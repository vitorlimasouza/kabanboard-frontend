import { useState } from "react";
import { forgetPassword } from "../services/userService";
import { Container } from "../styles/column";

export const ForgetPasswordPage = () => {
    const [email, setEmail] = useState("");

    const handleSendEmailClick = async () => {
        console.log(forgetPassword({email}));
    };

    return (
        <Container>
            <p>Enviaremos um email com um link para a redefinição de senha.</p>
            <br/>
            <label>
                <p>Email:</p>
                <input type="text" onChange={e => setEmail(e.target.value)}/>
            </label>
            <div>
                <button onClick={handleSendEmailClick}>Enviar email</button>
            </div>
        </Container>
    );
}
