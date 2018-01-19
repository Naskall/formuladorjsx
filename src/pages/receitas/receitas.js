import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import {Layout, 
  Form,  Input,  InputNumber,  Tooltip,
  Icon,  Cascader, Select, Row, Affix,
  Col, Checkbox, Button, AutoComplete,
  List, Avatar,DatePicker,Switch,Tabs,Menu
 } from 'antd';

 const {Content,Sider} = Layout;
 const TabPane = Tabs.TabPane;
 const SubMenu = Menu.SubMenu;
 const { TextArea } = Input;
   
let lote = '001';
 export default class receitas extends Component{

    state={
        collapsed:true,
        saving:false,
        iconSaving:false,
        produto:"Elemento X"
        
    }
    enterSaving=()=>{
        this.setState({saving:true})
    }
    enterIconSaving=()=>{
        this.setState({iconSaving:true})
    }

    toggleCollapsed=()=>{
        this.setState({
            collapsed:!this.state.collapsed,
        });
    }

    onCollapse = (collapsed) => {

        this.setState({ collapsed });
      }

    render(){

        const header= `Se quiser formular é aqui mesmo!`
        const subtitle=`Preencha todos os dados necessarios que eu faço o resto pra você `
        const header2= `Olha só!`
        const subtitle2=`Essas são todas suas formulações.` 
        
        return(


      
        <Layout>
      
      <Sider style={{position:'absolute',left:'0',top:'60px', height:'90vh'}}
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
        >   
        <Menu         
          mode="inline"
          theme="dark"
          //inlineCollapsed={this.state.collapsed}
        >
          <SubMenu key="sub1" title={
             <span><Icon type="dot-chart" />
                <span>Formulações Pré-definidas</span>
            </span>}>
            <Menu.Item key="1">Exemplo 1</Menu.Item>
            <Menu.Item key="2">Exemplo 2</Menu.Item>
            <Menu.Item key="3">Exemplo 3</Menu.Item>
            <Menu.Item key="4">Exemplo 4</Menu.Item>
          </SubMenu>
        </Menu>
        </Sider>
        <Layout style={{ marginLeft: 200 }}>
            <Tabs defaultActiveKey="1">
             <TabPane tab={<span><Icon type="file-add" />Formular</span>} key="1">
           
              <h1 style={{color: '#555'}}>{header}</h1>
               <h3  style={{color: '#555'}}>{subtitle}<Icon type="smile-o"/> </h3>
               
                <h2> Lote:#{lote}<a href=""><Icon type="edit"/></a></h2>
        <Form>
            <Form.Item>
            <Input className="ant-input" readOnly placeholder= "Escolha o produto nas pré-definições."/> 
            </Form.Item>
            
            <Form.Item>
            <Input  className="ant-input" placeholder= "Qual quantidade vai ser usada?"/>
            </Form.Item>

            <Form.Item>
            <Input  className="ant-input" placeholder= "Pra quem é ?"/>
            </Form.Item>  

            <Form.Item>
            <TextArea rows={4} placeholder="Teria algo mais a dizer?" />
            </Form.Item>
            <Form.Item>
            <Icon type="Like"/>
            <Button type="primary" icon="like" loading={this.state.saving} onClick={this.enterSaving}>
            
            É só isso</Button>
            </Form.Item>
        </Form>
        </TabPane>

      <TabPane tab={<span><Icon type="bars" />Consultar</span>} key="2">
            
        
        
            
          </TabPane>      
        </Tabs>     </Layout>

            </Layout>
            

        );


    }
    
}