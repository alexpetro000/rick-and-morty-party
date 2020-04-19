import React from 'react';

type character = {
    id: string | number;
    name: string;
    image: string;
}

interface CharacterListProps {
    characters: character[];
}

const CharacterList: React.FC<CharacterListProps> = ({ characters }) => {
    console.log(characters);
    return (
        <ul>
            {characters.map((character) => (
                <li key={character.id}>
                    {character.id}
                    &nbsp;
                    {character.name}
                </li>
            ))}
        </ul>
    );
};

export default CharacterList;
