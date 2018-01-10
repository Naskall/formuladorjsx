import ReactDOM from 'react-dom';
import Main from './components/Main/Main';

//Redux

import {Provider} from 'react-redux';

import './assets/css/style.css';

const store = configureStore();

const app = (
    <Provider store={store}> 
     <Main />
     
    </Provider> 
 );

ReactDOM.render(app, document.getElementById('root'));