import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import {Layout, 
  Form,  Input,  InputNumber,  Tooltip,
  Icon,  Cascader, Select, Row, 
  Col, Checkbox, Button, AutoComplete,
  List, Avatar,DatePicker,Switch,Tabs
 } from 'antd';

const FormItem = Form.Item;
const AutoCompleteOption = AutoComplete.Option;
const {Content} = Layout;
const InputGroup = Input.Group;
const Option = Select.Option;
const Search = Input.Search;
const TabPane = Tabs.TabPane;

const data =[
    {title:'Kauê Nascimento'},
    {title:'Douglas Souza'},
    {title:'Maria Silva'}
];

function hasErrors(fieldsError) {
    return Object.keys(fieldsError).some(field => fieldsError[field]);
  }


 class Usuarios extends React.Component{
        state ={
          dsFuncao:[
            `Função 1`,
            `Função 2`,
            `Função 3`,
            `Função 4`,
        ],

          dsSetor:[
            `Setor 1`,
            `Setor 2`,
            `Setor 3`,
            `Setor 4`,
        ],
          checked: true,
          disabled: false,
        }



    handleChange = (value) =>{

      dsEmails:!value || value.indexOf('@')>=0 ? [] :[
        `${value}@gmail.com`,
        `${value}@yahoo.com.br`,
        `${value}@yahoo.com`,
        `${value}@jco.com.br`,
        `${value}@outlook.com`,
        `${value}@ymail.com`,
        `${value}@bol.com.br`,
        `${value}@hotmail.com`,
      ]
    }

    handleSearch = (value) => {
      this.setState({
        dsEmails: !value ? [] : [
          value,
          value + value,
          value + value + value,
        ],
      });
    }


    
    render() {

      const { dsEmails } = this.state;
      const label = `${this.state.checked ? 'Sim' : 'Não'}`;
      function onChange(value) {
        console.log('changed', value);
      }

      const header= `AQUI EU CADASTRO PESSOAS!`
      const subtitle=`Para eu adicionar alguem, eu preciso que você me diga...`
      const header2= `AQUI EU CONSULTO PESSOAS!`
      const subtitle2=`Eu mostro à você todas as pessoas que já estão cadastradas.` 
      return (

     <Content id="Content">
        <Tabs defaultActiveKey="1">
            <TabPane tab={<span><Icon type="file-add" />Cadastrar</span>} key="1">
              <h1 style={{color: '#555'}}>{header}</h1>
                <h3  style={{color: '#555'}}>{subtitle}</h3>
        
        <Form>
          <Form.Item>
           <Input className="ant-input" placeholder= "Qual o nome dele completo?"/> 
          </Form.Item>
          
          <Form.Item>
           <Input  className="ant-input" placeholder= "E aonde ele mora?"/>
          </Form.Item>

          <Form.Item>
          <AutoComplete
              dataSource={this.state.dsEmails}
              style={{width:325}}
              onSearch={this.handleSearch}
              placeholder="Tem e-mail?"
              />
          </Form.Item>  
          <Form.Item> 
            <AutoComplete
            
              dataSource={this.state.dsFuncao}
              style={{width:325}}
              onSearch={this.handleSearch}
              placeholder="O que ele faz na empresa?"
              />
          </Form.Item>
       
          <Form.Item>
          <AutoComplete
              dataSource={this.state.dsSetor}
             style={{width:325}}
              onSearch={this.handleSearch}
              placeholder="Qual setor ele fica ?"
              />
          </Form.Item>   
 
          <Form.Item>Ele vai ser administrador?
          <Switch 
          checkedChildren={`Vai`} 
          unCheckedChildren={`Não`}/>
          </Form.Item>
      </Form>
        </TabPane>

      <TabPane tab={<span><Icon type="bars" />Consultar</span>} key="2">
            
            <h1 style={{color: '#555'}}>{header2}</h1>
             <h3 style={{color: '#555'}}>{subtitle2}</h3>
            <List itemLayout="horizontal"
            dataSource={data}
            renderItem={item=>(
                <List.Item>
              
                    <List.Item.Meta
                    avatar={<Avatar src="./../assets/images/usuarios/nophoto.png"/>}
                    title={
                      <Tooltip title={"Ver o perfil de "+ item.title}>
                    <a href="http://google.com.br">{item.title}</a>
                    </Tooltip>
                    }
                    description="Motorista de cargas perigosas"
                    />
                    
                </List.Item>              
            )}
            />
            
          </TabPane>      
        </Tabs>     
      </Content>
    );
  }    
}

export default Usuarios;