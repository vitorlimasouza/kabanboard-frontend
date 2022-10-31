import {Container} from "../styles/boardMiniature";


type Params = {id: string, name: string}
export const BoardMiniature = ({id, name}: Params) => {
    return (
        <Container>
            <label>{name}</label>
        </Container>
    );
}