import { Bar, Participants, ParticipantsPreview, Profile, ProfileShowButton, Title } from "../styles/header";
import { useEffect, useState } from "react";
import { UserConfigurationModal } from "./UserConfigurationModal";
import { SimpleUserResponse } from "../types/response/user/SimpleUserResponse";
import { ProfileIcon } from "./ProfileIcon";
import { ParticipantsList } from "./ParticipantsList";

type Params = {
    boardId?: string | null,
    title?: string | null,
    members?: SimpleUserResponse[],
    refreshMembers?: () => void
}
export const Header = ({
    boardId=null,
    title=null,
    members=[],
    refreshMembers=()=>{}
}: Params) => {
    const [previewdMembers, setPreviewdMembers] = useState(members)
    const [membersQuantity, setMembersQuantity] = useState(members.length)
    const [showParticipantsList, setShowParticipantsList] = useState(false);
    const [showUserConfig, setShowUserConfig] = useState(false);

    useEffect(() => {
        const previewMenbersQuantity = members.length <= 6 ? 6 : 5
        setPreviewdMembers(members.slice(0, previewMenbersQuantity))
        setMembersQuantity(members.length)
    }, [members])

    const handleProfileButtonClick = () => {
        const newValue = !showUserConfig;
        if (newValue) {
            setShowParticipantsList(false);
        }
        setShowUserConfig(newValue);
    };

    const handleParticipantsClick = () => {
        const newValue = !showParticipantsList;
        if (newValue) {
            setShowUserConfig(false);
        }
        setShowParticipantsList(newValue);
    };

    return (
        <Bar>
            <Title>{title}</Title>

            <Participants>
                <ParticipantsPreview onClick={handleParticipantsClick}>
                    {previewdMembers.map(member =>
                        <ProfileIcon
                            key={member.userId}
                            userName={member.userName}
                            photoUrl={member.photoUrl}
                        />
                    )}
                    {membersQuantity > 6
                        ? <ProfileIcon
                            key={"member_extra_count"}
                            userName={`+ ${membersQuantity - 5}`}
                            photoUrl={null}
                        />
                        : null
                    }
                </ParticipantsPreview>
                <ParticipantsList
                    show={showParticipantsList}
                    boardId={boardId !== null ? boardId : ""}
                    members={members}
                    refreshMembers={refreshMembers}
                />
            </Participants>

            <Profile>
                <ProfileShowButton onClick={handleProfileButtonClick}>=</ProfileShowButton>
                <UserConfigurationModal show={showUserConfig} refreshMembers={refreshMembers}/>
            </Profile>
        </Bar>
    );
}