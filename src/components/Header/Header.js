import React,{Component} from 'react';
import mainRouter from './../../routers/mainRouters';
export default class Header extends Component{

render(){
    return(
        
        <div className="container">
<mainRouter />
        <div id="top-bar" className="mainMenu">
            <a href="#" id="openMenu" className="pull-left">
                <i className="fas fa-bars icons"></i>
            </a>
            <a href="#" id="openNotice" title="Mostrar Noticias (Em Breve)">
                <i className="fas fa-bell pull-right icons"></i>
            </a>
            <span title="Alterar seu perfil" className="pull-right">
                <i className="fas fa-user-circle icons"></i>
            </span>

            <div id="openedItems">
                <ul>
                    <li>
                        <a href="#" class="active">Formulador</a>
                    </li>
                </ul>
            </div>

       
       

        </div>
        </div>

);
    }
}