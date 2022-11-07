import { Button } from "../styles";
import {
    CloseButton,
    Container,
    Painel,
    CardNameInput,
    CardDescriptionInput,
    MainArea,
    SideArea,
    PainelContent,
    UsersPainel,
    UserDetails,
    AddUserButton,
    ThinCenteredInput,
    HeaderModal
} from "../styles/upsertCardModal";
import { SimpleUserResponse } from "../types/response/user/SimpleUserResponse";
import { useEffect, useState } from "react";
import { createCard, findCardDetails, updateCard, updateCardParticipants } from "../services/cardService";
import { dateTimeToBrazilianDateTimeString } from "../shared/utils/dateUtils";
import { AddUserLabel } from "./AddUserLabel";
import { UserLabelWithRemove } from "./UserLabelWithRemove";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../styles/global.css";
import { MdClose } from 'react-icons/md';

type Params = {
    boardId: string,
    columnId: string,
    cardId?: string | null,
    boardMembers: SimpleUserResponse[],
    handleClose: () => void,
    refreshColumn: () => void
}
export const UpsertCardModal = ({
    boardId,
    columnId,
    cardId=null,
    boardMembers,
    handleClose,
    refreshColumn
}:Params) => {
    const [title, setTitle] = useState(null as string | null);
    const [description, setDescription] = useState(null as string | null);
    const [priority, setPriority] = useState(0);
    const [savedCardUsers, setSavedCardUsers] = useState([] as SimpleUserResponse[]);
    const [draftCardUsers, setDraftCardUsers] = useState([] as SimpleUserResponse[]);
    const [startDate, setStartDate] = useState(null as Date | null);
    const [endDate, setEndDate] = useState(null as Date | null);
    const [concludedAt, setConcludedAt] = useState(null as Date | null);

    const [showMembersToAdd, setShowMembersToAdd] = useState(false);
    const [membersToAddList, setMembersToAddList] = useState([] as SimpleUserResponse[])

    let showMembersToAddButtonText = showMembersToAdd ? "Voltar" : "Responsavel";

    useEffect(() => {
        if (cardId !== null) {
            findCardDetails(boardId, columnId, cardId)
                .then(response => {
                    const startDateValue = response.startDate !== null? new Date(response.startDate) : null
                    const endDateValue = response.endDate !== null? new Date(response.endDate) : null
                    const concludedDateValue = response.concludedAt !== null? new Date(response.concludedAt) : null

                    setTitle(response.title)
                    setDescription(response.description)
                    setPriority(response.priority)
                    setSavedCardUsers(response.users)
                    setDraftCardUsers(response.users)
                    setStartDate(startDateValue)
                    setEndDate(endDateValue)
                    setConcludedAt(concludedDateValue)

                    setMembersToAddList(
                        boardMembers.filter(member =>
                            response.users.find(user => user.userId === member.userId) === undefined
                        )
                    )
                })
        } else {
            setTitle(null)
            setDescription(null)
            setStartDate(null)
            setEndDate(null)
            setConcludedAt(null)
        }
    }, [cardId]);

    const saveCard = async () =>  {
        if (title === null) return Promise.reject({successful: false});

        const startDateValue = (startDate !== null) ? startDate.toISOString() : null;
        const endDateValue = (endDate !== null) ? endDate.toISOString() : null;
        const concludedDateValue = (concludedAt !== null) ? concludedAt.toISOString() : null;

        if (cardId === null) {
            return createCard(
                boardId,
                columnId,
                {
                    title: title,
                    description: description,
                    priority: priority,
                    startDate: startDateValue,
                    endDate: endDateValue,
                    concludedAt: concludedDateValue
                }
            ).then(response => {
                const usersToAdd = draftCardUsers.filter(draftUser =>
                    savedCardUsers.find(user => user.userId === draftUser.userId) === undefined
                )
                const usersToRemove = savedCardUsers.filter(user =>
                    draftCardUsers.find(draftUser => draftUser.userId === user.userId) === undefined
                )

                updateCardParticipants(
                    boardId,
                    columnId,
                    response.id,
                    {
                        addParticipants: usersToAdd.map(it => it.userId),
                        removeParticipants: usersToRemove.map(it => it.userId)
                    }
                ).finally(() => {
                    refreshColumn()
                })
            })
        } else {
            return updateCard(
                boardId,
                columnId,
                cardId,
                {
                    title: title,
                    description: description,
                    priority: priority,
                    startDate: startDateValue,
                    endDate: endDateValue,
                    concludedAt: concludedDateValue,
                    columnId: columnId
                }
            ).then(response => {
                const usersToAdd = draftCardUsers.filter(draftUser =>
                    savedCardUsers.find(user => user.userId === draftUser.userId) === undefined
                )
                const usersToRemove = savedCardUsers.filter(user =>
                    draftCardUsers.find(draftUser => draftUser.userId === user.userId) === undefined
                )

                updateCardParticipants(
                    boardId,
                    columnId,
                    response.id,
                    {
                        addParticipants: usersToAdd.map(it => it.userId),
                        removeParticipants: usersToRemove.map(it => it.userId)
                    }
                ).finally(() => {
                    refreshColumn()
                })
            })
        }
    };

    const onSaveClick = async () => {
        if (title !== null) {
            handleClose()
            await saveCard()
                .then(response => {
                    setTitle(null);
                    setDescription(null);
                    setStartDate(null);
                    setEndDate(null);
                    setConcludedAt(null);
                    refreshColumn();
                })
                .catch(response =>
                    console.error("Could not save card")
                )
        } else {
            console.log("Title could not be null")
        }
    };

    const addUser = (userId: string) => {
        if (draftCardUsers.find(draftUser => draftUser.userId === userId) === undefined) {
            const user = boardMembers.find(member => member.userId === userId);
            if (user !== undefined) {
                setDraftCardUsers([...draftCardUsers, user]);
                setMembersToAddList(membersToAddList.filter(member => member.userId !== userId));
            }
        }
    };

    const removeUser = (userId: string) => {
        if (draftCardUsers.find(draftUser => draftUser.userId === userId) !== undefined) {
            setDraftCardUsers(draftCardUsers.filter(user => user.userId !== userId));

            const user = boardMembers.find(member => member.userId === userId);
            if (user !== undefined) {
                setMembersToAddList([...membersToAddList, user]);
            }
        }
    };

    const handleAddUserButtonClick = () => {
        console.log("oi")
        setShowMembersToAdd(!showMembersToAdd);
    };

    return(
        <Container>
            <Painel>

                <PainelContent>
                    <HeaderModal>
                        <CardNameInput
                                value={title !== null ? title : ""}
                                onChange={e => setTitle(e.target.value)}
                        />
                        <CloseButton onClick={handleClose}><MdClose/></CloseButton>
                    </HeaderModal>
                    <MainArea>
                        <SideArea>
                            <p>Descrição:</p>
                            <CardDescriptionInput
                                value={description !== null ? description : ""}
                                onChange={e => setDescription(e.target.value)}
                            />
                        </SideArea>
                        <SideArea>
                            <p>Descrição</p>
                            <UsersPainel>
                                {showMembersToAdd
                                    ? <UserDetails>
                                        {membersToAddList.map(member =>
                                            <AddUserLabel
                                                key={member.userId}
                                                userId={member.userId}
                                                userName={member.userName}
                                                photoUrl={member.photoUrl}
                                                addUser={addUser}
                                            />
                                        )}
                                    </UserDetails>
                                    : <UserDetails>
                                        {draftCardUsers.map(user =>
                                            <UserLabelWithRemove
                                                key={user.userId}
                                                userId={user.userId}
                                                userName={user.userName}
                                                photoUrl={user.photoUrl}
                                                removeUser={removeUser}
                                            />
                                        )}
                                    </UserDetails>
                                }
                                <AddUserButton onClick={handleAddUserButtonClick}>{showMembersToAddButtonText}</AddUserButton>
                            </UsersPainel>

                            <p>Prioridade:</p>
                            <ThinCenteredInput
                                type="number"
                                value={priority}
                                onChange={e => setPriority(+e.target.value)}
                            />

                            <p>Data inicial:</p>
                            <DatePicker
                                className="datepicker-field"
                                selected={startDate}
                                onChange={(date) => setStartDate(date)}
                                value={startDate != null ? dateTimeToBrazilianDateTimeString(startDate) : ""}
                                selectsStart
                                startDate={startDate}
                                endDate={endDate}
                                showTimeSelect
                            />

                            <p>Data final:</p>
                            <DatePicker
                                className="datepicker-field"
                                selected={endDate}
                                onChange={(date) => setEndDate(date)}
                                value={endDate != null ? dateTimeToBrazilianDateTimeString(endDate) : ""}
                                selectsEnd
                                startDate={startDate}
                                endDate={endDate}
                                showTimeSelect
                            />

                            <p>Data de conclusão:</p>
                            <DatePicker
                                className="datepicker-field"
                                selected={concludedAt}
                                onChange={(date) => setConcludedAt(date)}
                                value={concludedAt != null ? dateTimeToBrazilianDateTimeString(concludedAt) : ""}
                                showTimeSelect
                            />
                        </SideArea>
                    </MainArea>
                    <Button onClick={onSaveClick}>Salvar</Button>
                </PainelContent>
            </Painel>
        </Container>
    );
}