import { useState } from "react";
import { useParams } from "react-router-dom";
import { overwritePassword } from "../services/userService";
import { Container } from "../styles/column";
import { Button, Input, Painel } from "../styles";

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
                <label>Senha:</label>
                <Input type="password" onChange={e => setPassword(e.target.value)}/>

                <label>Confirmar senha:</label>
                <input type="password" onChange={e => setPasswordConfirm(e.target.value)}/>

                <Button onClick={onRedefinePasswordClick}>Redefinir senha</Button>
            </Painel>
        </Container>
    );
}
