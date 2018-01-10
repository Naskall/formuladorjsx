import ReactDOM from 'react-dom';
import Main from './components/Main/Main';

//Redux

import {Provider} from 'react-redux';

import './assets/css/style.scss';

//const store = configureStore();

const app = (
    <div>
     <Main />
     </div>
 );

ReactDOM.render(app, document.getElementById('root'));