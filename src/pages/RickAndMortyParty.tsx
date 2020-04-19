import React, { useState } from 'react';
import styled from 'styled-components';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import useThrottle from '../hooks/useThrottle.';

import CharacterSearch from '../components/CharacterSearch';
import CharacterList from '../components/CharacterList';
import CharacterParty from '../components/CharacterParty';

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

const Container = styled.div`
    width: 810px;
    margin: 141px auto 0 auto;
`;

type CharactersQueryResult = {
    characters: {
        info: {
            count: number,
            pages: number,
            next: number
        },
        results: Array<{
            id: string,
            image: string,
            name: string,
        }>,
    }
}

const RickAndMortyParty: React.FC = () => {
    const [searchQuery, setSearchQuery] = useState<string>('');
    const throttledSearchQuery = useThrottle(searchQuery.length > 2 ? searchQuery : '', 300);

    const {
        error, data, loading, fetchMore,
    } = useQuery(CHARACTERS, {
        variables: { name: throttledSearchQuery, page: 1 },
        skip: throttledSearchQuery.length <= 2,
        onCompleted: (d) => {
            function loadMode(page: number) {
                if (!page) return;
                fetchMore({
                    variables: {
                        name: throttledSearchQuery,
                        page,
                    },
                    updateQuery: (prev, { fetchMoreResult }) => {
                        if (!fetchMoreResult) return prev;
                        return {
                            ...prev,
                            characters: {
                                ...prev.characters,
                                info: fetchMoreResult.characters.info,
                                results: [
                                    ...prev.characters.results,
                                    ...fetchMoreResult.characters.results,
                                ],
                            },
                        };
                    },
                }).then((res) => {
                    if (!res.data) return;
                    loadMode(res.data.characters.info.next);
                });
            }
            if (d) loadMode(d.characters.info.next);
        },
    });

    return (
        <Container>
            <CharacterSearch
                value={searchQuery}
                onChange={setSearchQuery}
            />
            {loading && 'Loading...'}

            <CharacterList characters={error || !data ? [] : data.characters.results} />
            <CharacterParty />
        </Container>
    );
};

export default RickAndMortyParty;
