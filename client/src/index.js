import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyles from './styles';
import Pages from './pages';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
<<<<<<< HEAD
  uri: 'https://apollo-odyssey-cats.herokuapp.com/',
=======
  uri: 'https://server-catstronauts.herokuapp.com/', // change to YOUR own production server
>>>>>>> master
  cache: new InMemoryCache(),
  name: 'web',
  version: '1.0',
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <GlobalStyles />
    <Pages />
  </ApolloProvider>,
  document.getElementById('root')
);
