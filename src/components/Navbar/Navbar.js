import React,{Component} from 'react';
import {Badge,Menu,Button,Affix, message,Dropdown,Tooltip,Icon} from 'antd';
import {NavLink} from 'react-router-dom';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class Navbar extends Component{

    constructor(props){
        super(props);
    }
    state={
        count:0,
        show:true
    }

    handleMenuClick = (e)=>{
        console.log('click left button', e);
        switch(parseInt(e.key)){
            case 'receitas':
            '/receitas';
            break;
            case 'estoque':
            '/estoque';
            break;
            case 'lotes':
            '/lotes';
            break;

            case 'sobre':
            '/sobre';
            break;
        }
    }

render(){
    return(
    
          <Menu style={{position:'fixed', top:'0', width:'100%',zIndex:'1'}}
                theme="dark"
                defaultSelectedKeys={['2']}
                selectedKeys={[this.props.current]}
                onClick={this.handleMenuClick}
                mode="horizontal">
           <SubMenu title={<span>
               <Icon type="bars" /></span>}>
           <MenuItemGroup>
             <Menu.Item key="sobre"><a href="/sobre">
             <Icon type="info-circle"/>Sobre este programa</a></Menu.Item>
             <Menu.Item key="logout"><Icon type="logout"  />Sair</Menu.Item>
           </MenuItemGroup>
            </SubMenu>
           
                <Menu.Item>
                <Tooltip title={"Tela Inicial com Relatórios e Gráficos"}>
                    <a href="/"><Icon type="dashboard"/>DashBoard</a>
                    </Tooltip>
                    </Menu.Item>
            
            <SubMenu key="sub1"
            title={                
                <span>
                <Icon type="calculator" />Formulador <Icon type="down" />
                </span>
            }>
               <Menu.Item key="receitas"><a href="/receitas"> <Icon type="file-text" />Receitas</a></Menu.Item>
               <Menu.Item key="estoque"><a href="/estoque"><Icon type="area-chart" />Estoque</a></Menu.Item>
               <Menu.Item key="lotes"><a href="/lotes"><Icon type="database" />Lote</a></Menu.Item>
           
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

export default (Navbar);