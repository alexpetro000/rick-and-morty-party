import React, { useState } from 'react';
import styled from 'styled-components';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import useThrottle from '../hooks/useThrottle.';

import CharacterSearch from '../components/CharacterSearch';
import CharacterList from '../components/CharacterList';
import CharacterParty from '../components/CharacterParty';

import {
    TCharactersQueryData, TCharacter, TParty, TPartyMember,
} from '../types';

const CHARACTERS = gql`
    query Characters($page: Int, $name: String) {
        characters(page: $page, filter: {name: $name}) {
            info {
                count
                pages
                next
            }
            results {
                id
                name
                image
            }
        }
    }
`;

const Styled = {
    Container: styled.div`
        width: 90%;
        max-width: 810px;
        margin: 141px auto 0 auto;
    `,
    CharacterSearch: styled(CharacterSearch)`
        margin-bottom: 30px;
    `,
    CharacterParty: styled(CharacterParty)`
        margin: 98px auto 142px auto;
    `,
};

const partyInitialState = [
    {
        name: 'RICK',
        tag: 'rick',
    },
    {
        name: 'MORTY',
        tag: 'morty',
    },
];

const RickAndMortyParty: React.FC = () => {
    const [party, setParty] = useState<TParty>(partyInitialState);
    const [removedIds, setRemovedIds] = useState<Array<string|number>>([]);
    const [searchQuery, setSearchQuery] = useState<string>('');
    const throttledSearchQuery = useThrottle(
        searchQuery.length > 2 ? searchQuery : '',
        300,
    );

    const { error: queryError, data: queryData } = useQuery<TCharactersQueryData>(CHARACTERS, {
        variables: { name: throttledSearchQuery },
        skip: throttledSearchQuery.length <= 2,
    });

    const onCharacterClick = (character: TCharacter): void => {
        let isUpdated = false;
        const newParty = party.map((member: TPartyMember): TPartyMember => {
            if (character.name.toLowerCase().indexOf(member.tag.toLowerCase()) >= 0) {
                isUpdated = true;
                return { ...member, character };
            }
            return member;
        });
        if (isUpdated) setParty(newParty);
    };

    const onCharacterRemove = (character: TCharacter): void => {
        setRemovedIds([...removedIds, character.id]);
    };

    const filteredCharacters = (queryError || !queryData)
        ? []
        : queryData.characters.results
            .filter((character: TCharacter) => removedIds.indexOf(character.id) < 0);

    return (
        <Styled.Container>
            <Styled.CharacterSearch
                value={searchQuery}
                onChange={setSearchQuery}
            />
            <CharacterList
                characters={filteredCharacters}
                onCharacterClick={onCharacterClick}
                onCharacterRemove={onCharacterRemove}
            />
            <Styled.CharacterParty party={party} />
        </Styled.Container>
    );
};

export default RickAndMortyParty;
