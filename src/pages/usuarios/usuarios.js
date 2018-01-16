import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Layout, Form, Input, Tooltip,
        Icon, Cascader, Select, Row, 
        Col, Checkbox, Button, AutoComplete,
        List, Avatar
 } from 'antd';

const FormItem = Form.Item;
const Option = Select.Option;
const AutoCompleteOption = AutoComplete.Option;
const {Content} = Layout;
const data =[
    {title:'Kauê Nascimento'},
    {title:'Douglas Souza'},
    {title:'Maria Silva'}
];

function hasErrors(fieldsError) {
    return Object.keys(fieldsError).some(field => fieldsError[field]);
  }


 class Usuarios extends React.Component{
    render() {

        
  const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;     

  const userNameError = isFieldTouched('userName') && getFieldError('userName');
  const passwordError = isFieldTouched('password') && getFieldError('password');
        return (
           <Content id="Content">
  <Form layout="inline" onSubmit={this.handleSubmit}>
  <FormItem
          validateStatus={userNameError ? 'error' : ''}
          help={userNameError || ''}
        >
          {getFieldDecorator('userName', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
          )}
        </FormItem>
</Form>


            <List itemLayout="horizontal"
            dataSource={data}
            renderItem={item=>(
                <List.Item>
                    <List.Item.Meta
                    avatar={<Avatar src="./../assets/images/usuarios/nophoto.png"/>}
                    title={<a href="http://google.com.br">{item.title}</a>}
                    description="Motorista de cargas perigosas"
                    />
                </List.Item>
                
            )}
            />
            </Content>
            );


    }
    
}

export default Usuarios;