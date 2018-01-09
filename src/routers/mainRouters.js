import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import Navbar from './../components/navbar/navbar';



//Pages
import Home from './../pages/home/home';
import About from './../pages/about/about';
import Recipes from './../pages/recipes/recipes';
import Lot from './../pages/lot/lot';
import Stock from './../pages/stock/stock';
import Users from './../pages/users/users';

const NotFoundPage = () => (
    <div>
        Você não deveria estar aqui! <Link to="/">Como foi que você chegou aqui? Me avise pelo e-mail: ksn7@ymail.com</Link>
    </div>
);

export default class MainRouter extends React.Component {
    constructor(){
        super();
        console.log(this);
    }
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Navbar />
                    <Switch>
                        <Route path="/" component={Home} exact={true} />
                        <Route path="/about" component={About} />
                        <Route path="/users" component={Users}/>
                        <Route path="/recipes" component={recipes}/>
                        <Route path="/stock" component={Stock}/>
                        <Route path="/lot" component={lot}/>

                        <Route component={NotFoundPage} />
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}

