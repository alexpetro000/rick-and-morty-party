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

const Styled = {
    Container: styled.div`
        width: 90%;
        max-width: 810px;
        margin: 141px auto 0 auto;
    `,
    CharacterSearch: styled(CharacterSearch)`
        /* */
    `,
    CharacterList: styled(CharacterList)`
        margin-top: 30px;
    `,
    CharacterParty: styled(CharacterParty)`
        /* */
    `,
};

const RickAndMortyParty: React.FC = () => {
    const [searchQuery, setSearchQuery] = useState<string>('');
    const throttledSearchQuery = useThrottle(searchQuery.length > 2 ? searchQuery : '', 300);

    const { error, data } = useQuery(CHARACTERS, {
        variables: { name: throttledSearchQuery, page: 1 },
        skip: throttledSearchQuery.length <= 2,
    });

    return (
        <Styled.Container>
            <Styled.CharacterSearch
                value={searchQuery}
                onChange={setSearchQuery}
            />
            <Styled.CharacterList characters={(error || !data) ? [] : data.characters.results} />
            <Styled.CharacterParty />
        </Styled.Container>
    );
};

export default RickAndMortyParty;
