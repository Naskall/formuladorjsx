import React,{Component} from 'react';
import {Badge,Menu,Icon,Button, message,Dropdown} from 'antd';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

export default class Header extends Component{

render(){
    return(
          <Menu 
            onClick={this.handleClick}
            mode="horizontal">
           <SubMenu title={<span><Icon type="appstore-o" /></span>}>
           <MenuItemGroup>
             <Menu.Item key="setting:1">Sobre este programa</Menu.Item>
             <Menu.Item key="setting:2">Sair</Menu.Item>
           </MenuItemGroup>
            </SubMenu>
            
            <Menu.Item>Formulador</Menu.Item>
            <Menu.Item>
                
                <Icon type="user"/></Menu.Item>
             
            <Menu.Item>
                <Badge count={3}/>
                <Icon type="bell"/></Menu.Item>
                
            </Menu>

        );
    }
}