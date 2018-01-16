import {Layout,Tooltip,
    Icon, Row, 
    Col
} from 'antd';
const {Header,Content,Sider,Footer} = Layout;
import Navbar from './../Navbar/Navbar';
import AppSet from './../AppSet/AppSet';
//import Navbar from './../NavBar/Navbar';
//import NoticeBar from './../NoticeBar/NoticeBar';

import Mainrouter from './../../routers/mainRouters';
//import usuarios from '../../pages/usuarios/usuarios';


// Obrigado Fernanda Nubank pelo nome do AppSet
export default class Main extends React.Component {
  
 render(){
     console.log(Navbar)
     return(
         <div>
         <Layout className="layout">
         <Header>
             <Navbar/>
             </Header>
             <Content>
             <Mainrouter />
             </Content>           
            <Footer>
                <AppSet/>                      
            </Footer>  
         </Layout>
         </div>
     );
 }
}