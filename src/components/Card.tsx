import React, { useState } from 'react';
import styled from 'styled-components';

const Styled = {
    Card: styled.div`
        height: 220px;
        position: relative;
        ${(props): string => (props.color ? `background: ${props.color}` : '')};
        ${(props): string => (props.onClick ? '&.active { box-shadow: 0 0 10px rgba(0,0,0,0.5); }' : '')}
    `,
    Image: styled.img`
        object-fit: cover;
        width:100%;
        height:100%;
    `,
};

const Card: React.FC<IProps> = ({
    image, className, children, onClick, color,
}) => {
    const [cardIsActive, setCardIsActive] = useState<boolean>(false);

    return (
        <Styled.Card
            className={(className || '') + (cardIsActive ? 'active' : '')}
            onClick={onClick}
            onMouseDown={(): void => setCardIsActive(true)}
            onMouseUp={(): void => setCardIsActive(false)}
            onMouseLeave={(): void => setCardIsActive(false)}
            color={color}
        >
            {image && <Styled.Image src={image} />}
            {children}
        </Styled.Card>
    );
};

export default Card;
export interface IProps {
    image?: string;
    name?: string;
    className?: string;
    color?: string;
    onClick?(): void;
}
