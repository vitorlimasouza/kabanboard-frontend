import { Container} from '../styles/column'
import { loadCard } from './api'
import update from 'immutability-helper'
import { Card } from './Card'
import { useState, useCallback } from 'react';

export interface Item {
    id: number;
    content: string;
    labels: string;
    user: string;
}

export const Column = ({data}:any) => {

const [cards, setCards] = useState(loadCard(data.id));

const moveCard = useCallback((dragIndex: number, hoverIndex: number) => {
  setCards((prevCards: Item[]) =>
    update(prevCards, {
      $splice: [
        [dragIndex, 1],
        [hoverIndex, 0, prevCards[dragIndex] as Item],
      ],
    }),
  )
}, []);

  return(
    <>
        <Container>
            <header><h2>{data.title}</h2></header>
            <ul>
            { cards && cards.map((card, index) => 
                <Card key={ card.id } 
                    index={ index } 
                    tittle={ card.content }
                    user={ card.user }
                />
                )}
            </ul>
        </Container>
    </>
  )
} 