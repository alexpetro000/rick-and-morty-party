import React from 'react';
import styled from 'styled-components';

const Styled = {
    Card: styled.div`
        height: 220px;
        position: relative;
        background: #DADADA;
        &:active {
            box-shadow: 0 0 10px rgba(0,0,0,0.5);
        }
    `,
    Image: styled.img`
        object-fit: cover;
        width:100%;
        height:100%;
    `,
};

const Card: React.FC<IProps> = ({
    image, className, children, onClick,
}) => (
    <Styled.Card className={className} onClick={onClick}>
        {image && <Styled.Image src={image} />}
        {children}
    </Styled.Card>
);

export default Card;
export interface IProps {
    image?: string
    name?: string
    className?: string
    onClick?(): void
}
