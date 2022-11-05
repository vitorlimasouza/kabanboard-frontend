import { Container } from "../styles/boardMiniature";
import { useNavigate } from "react-router-dom";


type Params = {
    id: string,
    name: string
}
export const BoardMiniature = ({id, name}: Params) => {
    let navigate = useNavigate()

    const handleContainerOnClick = () => {
        navigate(`/board/${id}`)
    }

    return (
        <Container onClick={handleContainerOnClick}>
            <label>{name}</label>
        </Container>
    );
}