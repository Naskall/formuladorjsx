import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import Navbar from './../components/NavBar/Navbar';

//Pages
import Home from './../pages/home/home';
import Sobre from './../pages/sobre/sobre';
import Receitas from './../pages/receitas/receitas';
import Lote from './../pages/lote/lote';
import Estoque from './../pages/estoque/estoque';
import Usuarios from './../pages/usuarios/usuarios';

const NotFoundPage = () => (
    <div>
        Você não deveria estar aqui! <Link to="/">Como foi que você chegou aqui? Me avise pelo e-mail: ksn7@ymail.com</Link>
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
                        <Route path="/Lote" component={Lote}/>

                        <Route component={NotFoundPage} />
                    </Switch>
               
            </BrowserRouter>
        )
    }
}

