import Header from './../Header/Header';
import AppSet from './../AppSet/AppSet';
import Navbar from './../NavBar/Navbar';
//import NoticeBar from './../NoticeBar/NoticeBar';

import Mainrouter from './../../routers/mainRouters';
//import usuarios from '../../pages/usuarios/usuarios';


// Obrigado Fernanda Nubank pelo nome do AppSet
export default class Main extends React.Component {
    
 render(){
     console.log(Navbar)
     return(
         <div>
         <Header/>
            <Mainrouter />
         <AppSet/> 
         </div>
     );
 }
}