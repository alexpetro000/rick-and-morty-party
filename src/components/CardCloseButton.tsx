import React from 'react';
import styled from 'styled-components';
import closeIcon from '../assets/closeIcon.svg';

const Button = styled.button`
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
`;

const CardCloseButton: React.FC = (props) => (
    <Button {...props}>
        <img width="10px" src={closeIcon} alt="" />
    </Button>
);

export default CardCloseButton;
