import {
    AddUserContainer,
    Button,
    Field,
    LeaveButton,
    Painel,
    ParticipantsDetails,
    UserLabel,
    UserName
} from "../styles/participantsList";
import { SimpleUserResponse } from "../types/response/user/SimpleUserResponse";
import { ProfileIcon } from "./ProfileIcon";
import {addMenberToBoard, leaveBoard} from "../services/boardService";
import { useEffect, useState } from "react";
import {useNavigate} from "react-router-dom";

type Params = {
    show: boolean,
    boardId: string,
    members: SimpleUserResponse[],
    refreshMembers: () => void
}
export const ParticipantsList = ({boardId, show, members, refreshMembers}:Params) => {
    let navigate = useNavigate()

    const [email, setEmail] = useState("");
    const [membersList, setMembersList] = useState(members)

    const showHideClassName = show ? "display-block" : "display-none";

    useEffect(() => {
        setMembersList(members)
    }, [members])

    const handleOnAddUserButtonClick = () => {
        addMenberToBoard(boardId, email)
            .then(response => {
                refreshMembers()
                setEmail("")
            })
    };

    const handleOnLeaveButtonClick = () => {
        leaveBoard(boardId)
            .then(response =>
                navigate("/dashboard")
            )
    }

    return (
        <Painel className={showHideClassName}>
            <ParticipantsDetails>
                {membersList.map(member =>
                    <UserLabel key={member.userId}>
                        <ProfileIcon
                            userName={member.userName}
                            photoUrl={member.photoUrl}
                        />
                        <UserName>{member.userName}</UserName>
                    </UserLabel>
                )}
            </ParticipantsDetails>
            <AddUserContainer>
                <Field value={email} onChange={e => setEmail(e.target.value)}/>
                <Button onClick={handleOnAddUserButtonClick}>+</Button>
            </AddUserContainer>
            <LeaveButton onClick={handleOnLeaveButtonClick}>Leave Board</LeaveButton>
        </Painel>
    );
}