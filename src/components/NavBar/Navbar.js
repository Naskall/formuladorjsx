import {
    Menu, Icon,
    Dropdown, Button, message
} from 'antd';

import { NavLink } from 'react-router-dom';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;



import { setTab } from './actionNavbar';

class Navbar extends React.Component {

    constructor(props) {
        super(props);
    }

    handleClick = (e) => {
        console.log('click ', e);
        this.props.dispatch(setTab(e.key));
    }

    handleButtonClick = (e) =>{
        console.log('click left button', e);
    }
    render() {
        console.log('props', this.props.current);
        return (
            <nav>
                <Menu
                    onClick={this.handleClick}
                    selectedKeys={[this.props.current]}
                    mode="horizontal"
                >
                    <Menu.Item key="home">
                        <NavLink to="/" exact={true}>{translate('home', this.props.language, 'navBar')}</NavLink>
                    </Menu.Item>
                    <Menu.Item key="about">
                        <NavLink to="/about">{translate('about', this.props.language, 'navBar')}</NavLink>
                    </Menu.Item>
                </Menu>
                <Dropdown.Button onClick={this.handleButtonClick} overlay={this.menu}>
                        {translate('selectedLanguage', this.props.language, 'navBar')}
                </Dropdown.Button>
            </nav>
        )
    }
}

export default Navbar;