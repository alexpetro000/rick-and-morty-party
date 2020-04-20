import React from 'react';
import styled from 'styled-components';
import CharacterCard from './CharacterCard';
import { TCharacter } from '../types';

const Styled = {
    Container: styled.div`
        display: flex;
        flex-flow: row wrap;
        justify-content: center;
    `,
    CharacterCard: styled(CharacterCard)`
        width: calc(25% - 30px * 3/4);
        height: 220px;
    
        margin-right: 30px;
        margin-top: 30px;
        
        &:nth-child(4n) {
            margin-right: 0;
        }
        &:nth-child(-n+4) {
            margin-top: 0;
        }
    `,
};

const CharacterList: React.FC<IProps> = ({ characters, className }) => {
    return (
        <Styled.Container className={className}>
            {characters.map((character) => (
                <Styled.CharacterCard key={character.id} image={character.image} />
            ))}
        </Styled.Container>
    );
};

export default CharacterList;
export interface IProps {
    characters: TCharacter[],
    className?: string,
}
