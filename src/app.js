import ReactDOM from 'react-dom';
import Main from './components/Main/Main';
import ApolloProvider from './components/apollo/apolloClient';
//const mongoose = require('mongoose');
//mongoose.connect('mongodb://54.94.231.97/minion');

//Redux

//import {Provider} from 'react-redux';
import './assets/dist/antd.css';
//import 'antd/dist/antd.less';
import './assets/css/style.scss';
import './assets/font-awesome/css/fontawesome-all.css';
import './assets/font-awesome/scss/fa-regular.scss';

//const store = configureStore();

const app = (
    <ApolloProvider client={client}>
    <div className="container">
        <Main />
     </div>
     </ApolloProvider>
 );

ReactDOM.render(app, document.getElementById('Root'));