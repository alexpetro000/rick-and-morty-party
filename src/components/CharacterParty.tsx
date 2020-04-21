import React from 'react';
import styled from 'styled-components';
import CardGroup from './CardGroup';
import Card from './Card';
import { TParty } from '../types';

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

const CharacterParty: React.FC<IProps> = React.memo(({ className, party }) => (
    <div className={className}>
        <Styled.Title>PARTY</Styled.Title>
        <CardGroup cols={4} gap={30}>
            {party.map((member, i) => (
                <Card
                    /* eslint-disable-next-line react/no-array-index-key */
                    key={i}
                    image={member.character && member.character.image}
                    color="#DADADA"
                >
                    {member.character
                        ? null
                        : <Styled.Name>{member.name}</Styled.Name>}
                </Card>
            ))}
        </CardGroup>
    </div>
));

export default CharacterParty;
export interface IProps {
    className?: string;
    party: TParty;
}
