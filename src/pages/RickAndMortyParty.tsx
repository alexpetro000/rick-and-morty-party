import React, { useState, useCallback, useMemo } from 'react';
import styled from 'styled-components';
import { useQuery } from '@apollo/react-hooks';
import { throttle } from 'lodash';

import CharacterSearch from '../components/CharacterSearch';
import CharacterList from '../components/CharacterList';
import CharacterParty from '../components/CharacterParty';

import {
    TCharactersQueryData, TCharacter, TParty, TPartyMember,
} from '../types';

import CHARACTERS from '../gql/characters';

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
    { name: 'RICK', tag: 'rick' },
    { name: 'MORTY', tag: 'morty' },
];

const RickAndMortyParty: React.FC = () => {
    const [party, setParty] = useState<TParty>(partyInitialState);
    const [removedIds, setRemovedIds] = useState<Array<string|number>>([]);
    const [searchQuery, setSearchQuery] = useState<string>('');

    const throttledSetSearchQuery = useCallback(throttle(setSearchQuery, 300), [setSearchQuery]);

    const {
        error: queryError, data: queryData,
    } = useQuery<TCharactersQueryData>(CHARACTERS, {
        variables: { name: searchQuery },
        skip: searchQuery.length <= 2,
        errorPolicy: 'all',
    });

    const onCharacterClick = useCallback((character: TCharacter): void => {
        let isUpdated = false;
        const newParty = party.map((member: TPartyMember): TPartyMember => {
            if (character.name.toLowerCase().indexOf(member.tag.toLowerCase()) >= 0) {
                isUpdated = true;
                return { ...member, character };
            }
            return member;
        });
        if (isUpdated) setParty(newParty);
    }, [party]);

    const onCharacterRemove = useCallback((character: TCharacter): void => {
        setRemovedIds([...removedIds, character.id]);
    }, [removedIds, setRemovedIds]);

    const filteredCharacters = useMemo(() => ((queryError || !queryData || !queryData.characters)
        ? []
        : queryData.characters.results
            .filter((character: TCharacter) => removedIds.indexOf(character.id) < 0)
    ), [queryData, queryError, removedIds]);

    return (
        <Styled.Container>
            <Styled.CharacterSearch
                onChange={throttledSetSearchQuery}
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
