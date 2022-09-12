import { useRef } from "react";
import { Container } from "../styles/card";
import { useDrag, useDrop } from "react-dnd";

export const Card = ({data}:any) => {
    const refDragdrop = useRef();

    const [{ isDragging }, dragRef] = useDrag(() => ({
          type: 'CARD',
          item: {type: 'CARD'},
          collect: (monitor) => ({ 
            isDragging: monitor.isDragging() 
          })
        })
    );
    return(
        <Container ref={dragRef}>
            <header>
               {data.content}
            </header>
            <footer>
                
            </footer>
        </Container>
    );

}
