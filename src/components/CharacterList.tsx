import React from 'react';
import styled from 'styled-components';
import CharacterCard from './CharacterCard';
import CardGroup from './CardGroup';
import { TCharacter } from '../types';
import closeIcon from '../assets/closeIcon.svg';

const Styled = {
    CharacterCard: styled(CharacterCard)`
        height: 220px;
    `,
};

const CharacterList: React.FC<IProps> = ({ characters, className }) => {
    return (
        <CardGroup className={className} cols={4} gap={30}>
            {characters.map((character) => (
                <Styled.CharacterCard key={character.id} image={character.image} />
            ))}
        </CardGroup>
    );
};

export default CharacterList;
export interface IProps {
    characters: TCharacter[],
    className?: string,
}
