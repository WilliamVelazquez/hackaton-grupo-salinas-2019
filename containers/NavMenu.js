import React, {Component} from 'react';

import NavNarrow from '../components/navigation/NavNarrow';
import NavWide from '../components/navigation/NavWide';
import withDimensions from './withDimension';

class NavMenu extends Component{
  state={
    menuOpened: false
  }

  toggleMenu = () => {
    this.setState({menuOpened:!this.state.menuOpened});
  }

  render() {
    const menuOptions = [
      {id:1, context:'', text:'Inicio'},
    ];

    return(
      <nav>
        {
          this.props.isMobileSized ?
          <NavNarrow 
            menuOptions={menuOptions}
            active={this.props.active}
            toggleMenu={this.toggleMenu}
            menuOpened={this.state.menuOpened}
            isMobileSized={this.props.isMobileSized}
          />
          :
          <NavWide 
            menuOptions={menuOptions}
            active={this.props.active}
            isMobileSized={this.props.isMobileSized}
          />
        }
      </nav>
    );
  }
}

export default withDimensions(NavMenu);