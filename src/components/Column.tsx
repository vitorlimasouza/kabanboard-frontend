import { useDrop } from 'react-dnd';
import { Container } from '../styles/column'
import { loadCard } from './api'
import { Card } from './Card'


export const Column = ({data}:any) => {

    const cards = loadCard(data.id);

    const [collectedProps, drop] = useDrop(() => ({
        accept: 'CARD'

      }))
    return(
        
        <Container ref={drop}>
            <header>
                <h2>{data.title}</h2>
            </header>
            <ul>
                {cards && cards.map(card => <Card key={card.id} data={card}/>)}
            </ul>
        </Container>
    )
} 