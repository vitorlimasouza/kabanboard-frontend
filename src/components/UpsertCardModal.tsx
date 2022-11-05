import { Button } from "../styles";
import {
    CloseButton,
    Container,
    Painel,
    CardNameInput,
    CardDescriptionInput,
    MainArea,
    SideArea,
    PainelContent
} from "../styles/createCardModal";
import { useEffect, useState } from "react";
import { createCard, findCardDetails, updateCard } from "../services/cardService";
import { dateTimeToBrazilianDateTimeString } from "../shared/utils/dateUtils";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../styles/global.css";

type Params = {
    boardId: string,
    columnId: string,
    cardId?: string | null,
    handleClose: () => void,
    onAddCardTrigger: () => void
}
export const UpsertCardModal = ({
    boardId,
    columnId,
    cardId=null,
    handleClose,
    onAddCardTrigger
}:Params) => {
    const [title, setTitle] = useState(null as string | null);
    const [description, setDescription] = useState(null as string | null);
    const [startDate, setStartDate] = useState(null as Date | null);
    const [endDate, setEndDate] = useState(null as Date | null);
    const [concludedAt, setConcludedAt] = useState(null as Date | null);

    useEffect(() => {
        console.log("oie")
        if (cardId !== null) {
            findCardDetails(boardId, columnId, cardId)
                .then(response => {
                    const startDateValue = response.startDate !== null? new Date(response.startDate) : null
                    const endDateValue = response.endDate !== null? new Date(response.endDate) : null
                    const concludedDateValue = response.concludedAt !== null? new Date(response.concludedAt) : null

                    setTitle(response.title)
                    setDescription(response.description)
                    setStartDate(startDateValue)
                    setEndDate(endDateValue)
                    setConcludedAt(concludedDateValue)
                })
        } else {
            setTitle(null)
            setDescription(null)
            setStartDate(null)
            setEndDate(null)
            setConcludedAt(null)
        }
    }, [cardId])

    const saveCard = async () => {
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
                    startDate: startDateValue,
                    endDate: endDateValue,
                    concludedAt: concludedDateValue
                }
            );
        } else {
            return updateCard(
                boardId,
                columnId,
                cardId,
                {
                    title: title,
                    description: description,
                    startDate: startDateValue,
                    endDate: endDateValue,
                    concludedAt: concludedDateValue,
                    columnId: columnId
                }
            )
        }
    }

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
                    onAddCardTrigger();
                })
                .catch(response =>
                    console.error("Could not save card")
                )
        } else {
            console.log("Title could not be null")
        }
    }

    return(
        <Container>
            <Painel>
                <CloseButton onClick={handleClose}>x</CloseButton>

                <PainelContent>
                    <MainArea>
                        <p>Titulo:</p>
                        <CardNameInput
                            value={title !== null ? title : ""}
                            onChange={e => setTitle(e.target.value)}
                        />

                        <p>Descrição:</p>
                        <CardDescriptionInput
                            value={description !== null ? description : ""}
                            onChange={e => setDescription(e.target.value)}
                        />
                    </MainArea>

                    <SideArea>
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
                </PainelContent>

                <Button onClick={onSaveClick}>Salvar</Button>
            </Painel>
        </Container>
    );
}