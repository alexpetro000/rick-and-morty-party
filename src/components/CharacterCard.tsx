import React from 'react';
import styled from 'styled-components';
import closeIcon from '../assets/closeIcon.svg';

const Styled = {
    Card: styled.div`
        position: relative;
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
};

const CharacterCard: React.FC<IProps> = ({ image, className, children }) => {
    return (
        <Styled.Card className={className}>
            <Styled.Image src={image} />
            <Styled.CloseButton>
                <Styled.CloseIcon src={closeIcon} />
            </Styled.CloseButton>
            {children}
        </Styled.Card>
    );
};

export default CharacterCard;
export interface IProps {
    image: string
    className?: string
}
