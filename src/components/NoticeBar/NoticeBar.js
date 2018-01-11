import { elastic as Menu } from 'react-burger-menu'

class NoticeBar extends React.Component {
  showSettings (event) {
    event.preventDefault();
    
  }

  render () {
    return (
      <Menu>
        
        <a id="about" className="menu-item" href="/about">Sobre este sistema</a>
        <a id="contact" className="menu-item" href="/contact">Sobre a Oxsis</a>
        <a onClick={ this.showSettings } className="menu-item--small" href="">Sair</a>
      </Menu>
    );
  }
}