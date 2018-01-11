import Header from './../Header/Header';
import AppSet from './../AppSet/AppSet';
//import NoticeBar from './../NoticeBar/NoticeBar';

//import mainRouter from '../routers/mainRouters';

// Obrigado Fernanda Nubank pelo nome do AppSet
export default class Main extends React.Component {
    
 render(){
     return(
         <div className="container">
         
         <Header/>
            
         <AppSet/> 
         </div>
     );
 }
}