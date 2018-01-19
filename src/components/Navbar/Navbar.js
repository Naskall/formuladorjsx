import React,{Component} from 'react';
import {Badge,Menu,Button,Affix, message,Dropdown,Tooltip,Icon} from 'antd';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

export default class Navbar extends Component{

    state={
        count:0,
        show:true
    }


render(){
    return(
          <Menu  style={{position:'fixed', top:'0', width:'100%',zIndex:'1'}}
                theme="dark"
                defaultSelectedKeys={['2']}
                onClick={this.handleClick}
                mode="horizontal">
           <SubMenu title={<span>
               <Icon type="bars" /></span>}>
           <MenuItemGroup>
             <Menu.Item key="setting:1" onclick="console.log('Eu que fiz')">
             <Icon type="info-circle"/>Sobre este programa</Menu.Item>
             <Menu.Item key="setting:2"><Icon type="logout"  />Sair</Menu.Item>
           </MenuItemGroup>
            </SubMenu>
            
            <SubMenu key="sub1" title={
                
                   <span><Icon type="calculator" />Formulador <Icon type="down" /></span>
               }>
               <Menu.Item key="1"><Icon type="file-text" />Receitas</Menu.Item>
               <Menu.Item key="2"><Icon type="area-chart" />Estoque</Menu.Item>
               <Menu.Item key="3"><Icon type="database" />Lote</Menu.Item>
           
             </SubMenu>

            
            <Menu.Item>
                <Tooltip  title={"Veja seu perfil"}  placement="bottomRight">
                <Icon name="user"/>
                </Tooltip>
                </Menu.Item>
                
            <Menu.Item>
            <Tooltip  title={"Abrir noticias"}  placement="right">      
            <Icon name="bell" />
            </Tooltip>
                <Badge count={this.state.count}/>
            </Menu.Item>

            
            </Menu>

        );
    }
}