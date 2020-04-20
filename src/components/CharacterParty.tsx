import React from 'react';
import styled from 'styled-components';
import CardGroup from './CardGroup';
import Card from './Card';
import { TCharacter, TParty } from '../types';

const Styled = {
    Title: styled.div`
        margin: auto;
        margin-bottom: 20px;
        height: 33px;
        
        font-family: Roboto;
        font-style: normal;
        font-weight: bold;
        font-size: 30px;
        line-height: 35px;
        text-align: center;
        
        color: #000000;
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

const CharacterParty: React.FC<IProps> = ({ className, party }) => (
    <div className={className}>
        <Styled.Title>PARTY</Styled.Title>
        <CardGroup cols={4} gap={30}>
            <Card image={party.rick && party.rick.image}>
                {party.rick ? null : <Styled.Name>RICK</Styled.Name>}
            </Card>
            <Card image={party.morty && party.morty.image} name={party.rick ? '' : 'MORTY'}>
                {party.morty ? null : <Styled.Name>MORTY</Styled.Name>}
            </Card>
        </CardGroup>
    </div>
);

export default CharacterParty;
export interface IProps {
    className?: string
    party: TParty
}
