import {Label, RemoveSignal} from "../styles/userLabelWithRemove";
import { UserName } from "../styles/upsertCardModal";
import { ProfileIcon } from "./ProfileIcon";
import { useState } from "react";
import "../styles/global.css";

type Props = {
    userId: string,
    userName: string,
    photoUrl: string | null,
    removeUser: (addUsers: string) => void
}
export const UserLabelWithRemove = ({userId, userName, photoUrl, removeUser}:Props) => {
    const [displaySignal, setDisplaySignal] = useState("display-none")

    const handlerOnMouseOver = () => {
        setDisplaySignal("display-block")
    };

    const handlerOnMouseOut = () => {
        setDisplaySignal("display-none")
    };


    const handlerOnClick = () => {
        removeUser(userId);
    };

    return (
        <Label onClick={handlerOnClick} onMouseOver={handlerOnMouseOver} onMouseOut={handlerOnMouseOut}>
            <ProfileIcon
                key={userId}
                userName={userName}
                photoUrl={photoUrl}
                color="black"
            />
            <UserName>{userName}</UserName>
            <RemoveSignal className={displaySignal}>x</RemoveSignal>
        </Label>
    );
}