import ReactDOM from 'react-dom';
import Main from './components/Main/Main';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import './assets/dist/antd.css';
import './assets/css/style.scss';
import './assets/font-awesome/css/fontawesome-all.css';
import './assets/font-awesome/scss/fa-regular.scss';

//const store = configureStore();
const client = new ApolloClient({
    link: new HttpLink({uri:'http://54.94.231.97/minion'}),
    cache: new InMemoryCache()
  });

const app = (
    <ApolloProvider client={client}>
    <div className="container">
        <Main />
     </div>
     </ApolloProvider>
 );

ReactDOM.render(app, document.getElementById('Root'));