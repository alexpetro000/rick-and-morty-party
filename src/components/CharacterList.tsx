import React from 'react';
import styled from 'styled-components';
import Card from './Card';
import CardGroup from './CardGroup';
import CardCloseButton from './CardCloseButton';
import { TCharacter } from '../types';

const CharacterList: React.FC<IProps> = ({ characters, className, onCharacterClick }) => (
    <CardGroup className={className} cols={4} gap={30}>
        {characters.map((character) => (
            <Card
                key={character.id}
                image={character.image}
                onClick={onCharacterClick && onCharacterClick.bind(null, character)}
            >
                <CardCloseButton />
            </Card>
        ))}
    </CardGroup>
);

export default CharacterList;
export interface IProps {
    characters: TCharacter[]
    className?: string
    onCharacterClick?(character: TCharacter): void
}
