import { Bar, Profile, ProfileShowButton } from "../styles/header";
import { useState } from "react";
import { UserConfigurationModal } from "./UserConfigurationModal";

export const Header = () => {
    const [showUserConfig, setShowUserConfig] = useState(false);

    const handleProfileButtonClick = () => {
        const newValue = !showUserConfig;
        setShowUserConfig(newValue);
    };

    return (
        <Bar>
            <Profile>
                <ProfileShowButton onClick={handleProfileButtonClick}>=</ProfileShowButton>
                <UserConfigurationModal show={showUserConfig}/>
            </Profile>
        </Bar>
    );
}