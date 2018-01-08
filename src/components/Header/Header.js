import React,{Component} from 'react';

export default class Header extends Component{

render(){
    return(
        <div class="container">

        <div id="top-bar" class="mainMenu">
            <a href="#" id="openMenu" class="pull-left">
                <i class="fas fa-bars icons"></i>
            </a>
            <a href="#" id="openNotice" title="Mostrar Noticias">
                <i class="fas fa-bell pull-right icons"></i>
            </a>
            <span title="Alterar seu perfil" class="pull-right">
                <i class="fas fa-user-circle icons"></i>
            </span>

            <div id="openedItems">
                <ul>
                    <li>
                        <a href="#" class="active">Formulador</a>
                    </li>
                </ul>
            </div>


        <div id="mainMenu" class="menuContent">
            <a href="#"> Sobre este Programa</a>
            <div class="separator"></div>
            <a href="#" onclick="remote.getCurretWindow.close()">
                Sair</a>
        </div>



       
        <div id="noticeBar" class="content">
            <span class="Header">Noticias</span>
            <i class="fa fa-exclamation-circle alert" aria-hidden="true"></i>
            lorem ipsum!
            <hr/>
            <i class="fa fa-question-circle danger" aria-hidden="true"></i>
            lorem ipsum?
            <hr/>
            <i class="fa fa-exclamation-triangle warning" aria-hidden="true"></i>
            lorem ipsum.
        </div>

        </div>
        </div>

);
    }
}