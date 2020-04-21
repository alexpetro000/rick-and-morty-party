import React from 'react';
import Card from './Card';
import CardGroup from './CardGroup';
import CardCloseButton from './CardCloseButton';
import { TCharacter } from '../types';

const CharacterList: React.FC<IProps> = React.memo(({
    characters, className, onCharacterClick, onCharacterRemove,
}) => (
    <CardGroup className={className} cols={4} gap={30}>
        {characters.map((character) => (
            <Card
                key={character.id}
                image={character.image}
                onClick={onCharacterClick && onCharacterClick.bind(null, character)}
                color="#C4C4C4"
            >
                <CardCloseButton
                    onClick={(e: React.MouseEvent): void => {
                        e.stopPropagation();
                        if (onCharacterRemove) onCharacterRemove(character);
                    }}
                    onMouseDown={(e: React.MouseEvent): void => e.stopPropagation()}
                />
            </Card>
        ))}
    </CardGroup>
));

export default CharacterList;
export interface IProps {
    characters: TCharacter[];
    className?: string;
    onCharacterClick?(character: TCharacter): void;
    onCharacterRemove?(character: TCharacter): void;
}
