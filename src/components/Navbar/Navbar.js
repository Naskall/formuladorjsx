import React,{Component} from 'react';
import {Badge,Menu,Button, message,Dropdown} from 'antd';
import {Icon} from 'react-fa';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

export default class Navbar extends Component{

    state={
        count:0,
        show:true
    }


render(){
    return(
          <Menu 
                theme="dark"
                defaultSelectedKeys={['2']}
                onClick={this.handleClick}
                mode="horizontal">
           <SubMenu title={<span>
               <Icon name="bars" /></span>}>
           <MenuItemGroup>
             <Menu.Item key="setting:1" onclick="console.log('Eu que fiz')">
             <Icon name="info-circle"/>Sobre este programa</Menu.Item>
             <Menu.Item key="setting:2"><Icon name="sign-out-alt"  />Sair</Menu.Item>
           </MenuItemGroup>
            </SubMenu>
            
            <Menu.Item key="2">Formulador</Menu.Item>
            <Menu.Item>
                
                <Icon name="user" />Seu Perfil</Menu.Item>
             
            <Menu.Item>
                
            <Icon name="bell" />
                <Badge count={this.state.count}/>
            </Menu.Item>

            
            </Menu>

        );
    }
}