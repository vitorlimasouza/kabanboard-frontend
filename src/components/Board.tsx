import { Column } from './Column'
import { Container } from '../styles/board'
import { loadColumn } from './api'

const list = loadColumn();

export const Board = () => {
    return(
        <Container>
            {list.map(list => <Column key={list.title} data={list}/>)}
        </Container>
    )
}
