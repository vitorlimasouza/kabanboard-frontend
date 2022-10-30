import { Container } from "../styles/card";
import { useDrag, useDrop, XYCoord } from "react-dnd";
import { useRef, FC } from "react";
import { ICard } from "../Interface/ICard";

interface DragItem {
    index: number
    id: string
    type: string
}

interface Params {
    content: string,
    id: number,
    user: any,
    index: number
}

export const Card: FC<ICard> = ({user, index, tittle}) => {
    const ref = useRef<HTMLDivElement>(null);

    const [{ isDragging }, dragRef] = useDrag(() => ({
          type: 'CARD',
          item: {type: 'CARD', index},
          collect: (monitor) => ({ 
            isDragging: monitor.isDragging() 
          })
        })
    );

    const [, dropRef] = useDrop<
        DragItem,
        void
    >(() => ({
            accept: 'CARD',
            hover(item:any, monitor){
                if (!ref.current) {
                    return
                  }
                  const dragIndex = item.index
                  const hoverIndex = index
            
                  if (dragIndex === hoverIndex) {
                    return
                  }
            
                  const hoverBoundingRect = ref.current?.getBoundingClientRect()
            
                  const hoverMiddleY =
                    (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2
            
                  const clientOffset = monitor.getClientOffset()
            
                  const hoverClientY = (clientOffset as XYCoord).y - hoverBoundingRect.top

                  if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
                    return
                  }
                  if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
                    return
                  }
                  //move(dragIndex, hoverIndex)
                  item.index = hoverIndex
            }
      })
    );
      dragRef(dropRef(ref))
    return(
        <Container ref={ref} isDragging={isDragging}>
            <header>
               <p>{tittle}</p>
            </header>
            <img src = "https://avatars.githubusercontent.com/u/60241528?s=400&u=3c2329862da72db63bd5a4ccb95e47d89c29d077&v=4" alt="a" />
        </Container>
    );

}
