import Header from './../Header/Header';
import AppSet from './../AppSet/AppSet';
//import NoticeBar from './../NoticeBar/NoticeBar';

import Mainrouter from './../../routers/mainRouters';
//import usuarios from '../../pages/usuarios/usuarios';


// Obrigado Fernanda Nubank pelo nome do AppSet
export default class Main extends React.Component {
    
 render(){
     return(
         <div className="container">
         <Header/>
            <Mainrouter />
         <AppSet/> 
         </div>
     );
 }
}