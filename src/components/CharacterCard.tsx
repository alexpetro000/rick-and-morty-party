import React from 'react';
import styled from 'styled-components';
import closeIcon from '../assets/closeIcon.svg';

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
    CloseButton: styled.button`
        position: absolute;
        padding: 0;
        top: 8px;
        right: 8px;
        width: 30px;
        height: 30px;
        border-radius: 100%;
        border: none;
        background-color: rgba(255,255,255,0.75);
        
        display: flex;
        justify-content: center;
        align-content: center;
    
        &:active {
            background-color: rgba(127,127,127,0.75);
        }
        &:focus {
          outline: none;
        }
    `,
    CloseIcon: styled.img`
        width: 10px;
        height: 10px;
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
            <Styled.Image src={image} />
            <Styled.CloseButton>
                <Styled.CloseIcon src={closeIcon} />
            </Styled.CloseButton>
            <Styled.Name>{name}</Styled.Name>
            {children}
        </Styled.Card>
    );
};

export default CharacterCard;
export interface IProps {
    image: string
    name?: string
    className?: string
}
