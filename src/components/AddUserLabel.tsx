import { ProfileIcon } from "./ProfileIcon";
import { UserName } from "../styles/upsertCardModal";
import { AddSignal, Label } from "../styles/addUserLabel";
import { useState } from "react";
import "../styles/global.css";

type Props = {
    userId: string,
    userName: string,
    photoUrl: string | null,
    addUser: (addUsers: string) => void
}
export const AddUserLabel = ({userId, userName, photoUrl, addUser}:Props) => {
    const [displaySignal, setDisplaySignal] = useState("display-none")

    const handlerOnMouseOver = () => {
        setDisplaySignal("display-block")
    };

    const handlerOnMouseOut = () => {
        setDisplaySignal("display-none")
    };

    const handlerOnClick = () => {
        addUser(userId);
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
            <AddSignal className={displaySignal}>+</AddSignal>
        </Label>
    );
}