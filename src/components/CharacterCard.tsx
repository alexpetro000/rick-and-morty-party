import React from 'react';
import styled from 'styled-components';

const Styled = {
    Card: styled.div`
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
    Name: styled.div`
        position: absolute;
        top: 165px;
        width: 100%;
        font-family: Roboto;
        font-style: normal;
        font-weight: 300;
        font-size: 24px;
        line-height: 28px;
        text-align: center;
        color: #FFFFFF;
    `,
};

const CharacterCard: React.FC<IProps> = ({ image, name, className, children }) => {
    return (
        <Styled.Card className={className}>
            {image && <Styled.Image src={image} />}
            {name && <Styled.Name>{name}</Styled.Name>}
            {children}
        </Styled.Card>
    );
};

export default CharacterCard;
export interface IProps {
    image?: string
    name?: string
    className?: string
}
