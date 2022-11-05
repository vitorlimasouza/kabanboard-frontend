import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { overwritePassword } from "../services/userService";
import { Button, Container, Input, Painel } from "../styles";

export const RedefinePassword = () => {
    let navigate = useNavigate()
    let { token } = useParams();

    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");

    const onRedefinePasswordClick = async (e: any) => {
        e.preventDefault();

        if (token !== undefined) {
            if (password === passwordConfirm) {
                overwritePassword({token, password})
                    .then(response =>
                        navigate("/dashboard")
                    )
            } else {
                console.log("Password not match")
            }
        } else {
            console.log("Token is required")
        }
    };

    return (
        <Container>
            <Painel>
                <div>
                    <p>Senha:</p>
                    <Input type="password" onChange={e => setPassword(e.target.value)}/>
                </div>

                <div>
                    <p>Confirmar senha:</p>
                    <Input type="password" onChange={e => setPasswordConfirm(e.target.value)}/>
                </div>

                <Button onClick={onRedefinePasswordClick}>Redefinir senha</Button>
            </Painel>
        </Container>
    );
}
