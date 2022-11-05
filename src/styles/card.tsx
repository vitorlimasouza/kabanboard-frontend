import styled, {css} from "styled-components";

export interface Props {
    isDragging?: boolean
}

export const Container = styled.div`
    position: relative;
    background: #FFF;
    border-radius: 5px;
    margin-bottom: 10px;
    padding: 15px;
    box-shadow: 0 1px 4px 0 rgba(192, 230, 230, 0.8);
    border-top: 20px solid rgba(230, 236, 245, 0.4);
    cursor: pointer;

    img {
        width: 24px;
        height: 24px;
        border-radius: 5px;
        margin-top: 5px;
        
    }

    ${(props: Props ) => props.isDragging && css`
        border: 2px dashed rgba(0, 0, 0, 0.2);
        padding-top: 31px;
        border-raidus: 0;
        background: tranparent;
        box-shadow: none;
        cursor: grabbing;
        p, img, header, footer{
            opacity: 0;
        }
    `}
`;