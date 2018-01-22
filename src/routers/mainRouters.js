import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import Navbar from './../components/Navbar/Navbar';

//Pages
import Home from './../pages/home/home';
import Sobre from './../pages/sobre/sobre';
import Receitas from './../pages/receitas/receitas';
import Lotes from './../pages/lote/lote';
import Estoque from './../pages/estoque/estoque';
import Usuarios from './../pages/usuarios/usuarios';

const NotFoundPage = () => (
    <div>
        <img src="./../assets/images/404.png"/><br />
        Você não deveria estar aqui! Como foi que você chegou aqui? 
        <br /><br />
        Me avise pelo e-mail: <Link to="Mailto:ksn7@outlook.com">ksn7@outlook.com</Link>
        <br /><br /><Link to="/"><button>Voltar</button></Link>
    </div>
);

export default class mainRouter extends React.Component {
    constructor(){
        super();
        console.log(this);
    }
    render() {
        return (
            <BrowserRouter>           
                    <Switch>
                        <Route path="/" component={Home} exact={true} />
                        <Route path="/sobre" component={Sobre} />
                        <Route path="/usuarios" component={Usuarios}/>
                        <Route path="/receitas" component={Receitas}/>
                        <Route path="/estoque" component={Estoque}/>
                        <Route path="/lotes" component={Lotes}/>

                        <Route component={NotFoundPage} />
                    </Switch>
               
            </BrowserRouter>
        )
    }
}

