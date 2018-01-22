import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import {Layout, 
  Form,  Input,  InputNumber,  Tooltip,
  Icon,  Cascader, Select, Row, Affix,Table,
  Col, Checkbox, Button, AutoComplete,
  List, Avatar,DatePicker,Switch,Tabs,Menu
 } from 'antd';

 const {Content,Sider} = Layout;
 const TabPane = Tabs.TabPane;
 const SubMenu = Menu.SubMenu;
 const { TextArea } = Input;

 const dataFormulador = [{
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
  }, {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
  }, {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
  }, {
    key: '4',
    name: 'Jim Red',
    age: 32,
    address: 'London No. 2 Lake Park',
  }];
   
let lote = '001';
 export default class receitas extends Component{

    state={
        collapsed:true,
        saving:false,
        iconSaving:false,
        produto:"Elemento X",
        filteredInfo: null,
        sortedInfo: null,
        
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


      handleChange = (pagination, filters, sorter) => {
        console.log('Various parameters', pagination, filters, sorter);
        this.setState({
          filteredInfo: filters,
          sortedInfo: sorter,
        });
      }
      clearFilters = () => {
        this.setState({ filteredInfo: null });
      }
      clearAll = () => {
        this.setState({
          filteredInfo: null,
          sortedInfo: null,
        });
      }
      setAgeSort = () => {
        this.setState({
          sortedInfo: {
            order: 'descend',
            columnKey: 'age',
          },
        });
      }
    render(){

        let { sortedInfo, filteredInfo } = this.state;
        sortedInfo = sortedInfo || {};
        filteredInfo = filteredInfo || {};
        const columns = [{
          title: 'Nome ID',
          dataIndex: 'nomeID',
          key: 'nomeID',
          filters: [
            { text: '001', value: '1' },
            { text: '002', value: '2' },
          ],
          filteredValue: filteredInfo.name || null,
          onFilter: (value, record) => record.name.includes(value),
          sorter: (a, b) => a.name.length - b.name.length,
          sortOrder: sortedInfo.columnKey === 'loteID' && sortedInfo.order,
        }, {
          title: 'Lote ID',
          dataIndex: 'loteID',
          key: 'loteID',
          sorter: (a, b) => a.age - b.age,
          sortOrder: sortedInfo.columnKey === 'loteID' && sortedInfo.order,
        }, {
          title: 'Concentração',
          dataIndex: 'concentracao',
          key: 'concentracao',
          filters: [
            { text: 'London', value: 'London' },
            { text: 'New York', value: 'New York' },
          ],
         /* filteredValue: filteredInfo.concetracao || null,
          onFilter: (value, record) => record.concetracao.includes(value),
          sorter: (a, b) => a.concetracao.length - b.concetracao.length,
          sortOrder: sortedInfo.columnKey === 'concetracao' && sortedInfo.order,*/
        },
      {
        title:'Proporção',
        dataIndex:'proporcao',
        key:'proporcao',
      },{
        title:'Conc.Calculada',
        dataIndex:'concal',
        key:'concal',
      }
      
      ];

        const header= `Se quiser formular é aqui mesmo!`
        const subtitle=`Preencha todos os dados necessarios que eu faço o resto pra você `
        const header2= `Olha só!`
        const subtitle2=`Essas são todas suas formulações.` 
        
        return(


      
        <Layout>
      
      <Sider style={{position:'absolute',left:'0',top:'60px', minHeight:'90vh',height:'125vh'}}
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
             <Tooltip title="Formulações Pré-definidas" placement="right">
            <span><Icon type="dot-chart" />
            
                <span>Pré-definições</span>
                
            </span>
            </Tooltip>
            }>
            
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

      <TabPane tab={<span><Icon type="bars" />Ingredientes</span>} key="2">
      <Layout>

      <Table columns={columns} dataSource={dataFormulador} onChange={this.handleChange} />
            
        </Layout>              
            </TabPane>      
        </Tabs>     
    </Layout>
  </Layout>
            

        );


    }
    
}