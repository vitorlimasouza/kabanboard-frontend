import { Container } from "../styles/card";
import { useDrag, useDrop, XYCoord } from "react-dnd";
import { useRef, useContext } from "react";

interface DragItem {
    index: number
    id: string
    type: string
}

export const Card = ({data, index, move}:any) => {
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
                  move(dragIndex, hoverIndex)
                  item.index = hoverIndex
            }
      })
    );
      dragRef(dropRef(ref))
    return(
        <Container ref={ref} isDragging={isDragging}>
            <header>
               {data.content}
            </header>
            <footer>
                
            </footer>
        </Container>
    );

}
