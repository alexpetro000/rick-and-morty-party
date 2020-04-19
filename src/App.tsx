import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';

import RickAndMortyParty from './pages/RickAndMortyParty';

const client = new ApolloClient({
    uri: 'https://rickandmortyapi.com/graphql',
});

const App: React.FC = () => {
    return (
        <ApolloProvider client={client}>
            <RickAndMortyParty />
        </ApolloProvider>
    );
};

export default App;
