import { Button, Field, Painel } from "../styles/userConfigurationModal";
import { useEffect, useState } from "react";
import { getMe, updateUser } from "../services/userService";
import { removeBearerToken } from "../services/auth";
import { useNavigate } from "react-router-dom";
import "../styles/global.css"

type Params = {
    show: boolean
    refreshMembers: () => void
}
export const UserConfigurationModal = ({show, refreshMembers}: Params) => {
    let navigate = useNavigate()

    const [userId, setUserId] = useState("")
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState(null as string | null);
    const [email, setEmail] = useState("");
    const [profilePhotoUrl, setProfilePhotoUrl] = useState(null as string | null);
    const [hasUpdate, setHasUpdate] = useState(false);

    const showHideClassName = show ? "display-block" : "display-none";

    useEffect(() => {
        getMe()
            .then(response => {
                setUserId(response.id)
                setFirstName(response.firstName)
                setLastName(response.lastName)
                setEmail(response.email)
                setProfilePhotoUrl(response.photoUrl)
            })
    }, []);

    const handleFieldLosesFocus = () => {
        if (hasUpdate) {
            updateUser(
                userId,
                {
                    firstName: firstName,
                    lastName: lastName,
                    photoUrl: profilePhotoUrl
                }
            );
        }
        setHasUpdate(false);
        refreshMembers();
    };

    const handleProfilePhotoUrlFieldLosesFocus = () => {
        const expression = /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/gi;
        const regex = new RegExp(expression);

        if (profilePhotoUrl === null || profilePhotoUrl.match(regex)) {
            console.log("Successful match");
            handleFieldLosesFocus()
        } else {
            console.log("No match");
            setProfilePhotoUrl(null);
            return;
        }
    }

    const handleOnChangeFirstName = (value: string) => {
        setFirstName(value);
        setHasUpdate(true);
    };

    const handleOnChangeLastName = (value: string) => {
        setLastName(value);
        setHasUpdate(true);
    };

    const handleOnChangeProfilePhotoUrl = (value: string) => {
        setProfilePhotoUrl(value);
        setHasUpdate(true);
    };

    const handleOnExitButton = () => {
        removeBearerToken();
        navigate("/")
    }

    return (
        <Painel className={showHideClassName}>
            <p>Nome: </p>
            <Field
                value={firstName}
                onChange={e => handleOnChangeFirstName(e.target.value)}
                onBlur={handleFieldLosesFocus}
            />

            <p>Sobrenome: </p>
            <Field
                value={lastName !== null ? lastName : ""}
                onChange={e => handleOnChangeLastName(e.target.value)}
                onBlur={handleFieldLosesFocus}
            />

            <p>URL da foto de perfil: </p>
            <Field
                value={profilePhotoUrl !== null ? profilePhotoUrl : ""}
                onChange={e => handleOnChangeProfilePhotoUrl(e.target.value)}
                onBlur={handleProfilePhotoUrlFieldLosesFocus}
            />

            <Button onClick={handleOnExitButton}>Sair</Button>
        </Painel>
    );
}