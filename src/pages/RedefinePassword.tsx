import { useState } from "react";
import { useParams } from "react-router-dom";
import { overwritePassword } from "../services/userService";
import { Button, Container, Input, Painel } from "../styles";

export const RedefinePassword = () => {
    
    let { token } = useParams();

    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");

    const onRedefinePasswordClick = async (e: any) => {
        e.preventDefault();

        if (token !== undefined) {
            if (password === passwordConfirm) {
                overwritePassword({token, password})
                    .then(response =>
                        console.log("Sucess on overwrite password")
                    )
                    .catch(response =>
                        console.log("Fail on overwrite password")
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
