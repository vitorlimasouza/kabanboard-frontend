import { ProfileContainer, ProfileImage, ProfileInitials } from "../styles/profileImage";
import { useEffect, useState } from "react";
import "../styles/profileImage.css"

type Params = {
    userName: string,
    photoUrl: string | null,
    color?: string | null
}
export const ProfileIcon = ({userName, photoUrl, color}:Params) => {
    const [nameInitials, setNameInitials] = useState("")

    let profileBorderColor = color === "black" ? "border-2-solid-black" : "border-2-solid-white"
    let initialsColor = color === "black" ? "color-black" : "color-white"

    useEffect(() => {
        const splitedNames = userName.split(" ")
        setNameInitials(`${splitedNames[0][0]}${splitedNames[splitedNames.length -1][0]}`.toUpperCase())
    }, [userName, photoUrl])

    return (
        <ProfileContainer title={userName} className={profileBorderColor}>
            {photoUrl !== null
                ? <ProfileImage src={photoUrl} alt={userName}/>
                : <ProfileInitials className={initialsColor}>{nameInitials}</ProfileInitials>
            }
        </ProfileContainer>
    );
}