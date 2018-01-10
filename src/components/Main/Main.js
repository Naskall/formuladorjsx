import Header from '../Header/Header';
//import mainRouter from '../routers/mainRouters';
import AppSet from '../AppSet/AppSet';

// Obrigado Fernanda Nubank pelo nome
export default class Main extends React.Component{
 render(){
     return(
         <div className="container">
         <Header/>
            <h1>Hello</h1>
         <AppSet/> 
         </div>
     );
 }
}