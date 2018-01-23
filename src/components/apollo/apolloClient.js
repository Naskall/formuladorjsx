import {ApolloClient} from 'apollo-client';
import {HttpLink} from 'apollo-link-http';
import {InMemoryCache} from 'apollo-cache-inmemory';
import { ApolloCache } from 'apollo-client/node_modules/apollo-cache';

const client = new ApolloClient({
link: new HttpLink({uri:'http://54.94.231.97/minion'}),
cache: new InMemoryCache()
});