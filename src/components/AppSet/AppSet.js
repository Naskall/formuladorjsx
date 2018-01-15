//import mainRouter from './../../routers/mainRouters';
import AppSetBar from "react-osx-dock";
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';


// Obrigado Fernanda Nubank pelo nome do componente
export default class  AppSet extends React.Component {
    
 render(){
     return(
         
        <AppSetBar width={200} magnification={1}  className="appset-bottom" backgroundClassName="appset-bg" magnifyDirection="up">
            {["receitas", "estoque", "lotes", "usuarios"].map((item, index) => (
         <AppSetBar.Item key={index} onClick={
             
            () => console.log(item)
             
             }>
     <img src={`../assets/images/icons/${item}.png`} title={`Abre a tela de ${item}`}/>
      </AppSetBar.Item>
  ))}
 </AppSetBar>
     );
 }
}