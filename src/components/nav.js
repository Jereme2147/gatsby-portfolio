import React from 'react'
import navStyles from '../styles/nav.module.scss'
import hamburgerStyles from '../styles/hamburger.module.scss'
import Logo from './logo'
import Menu from './menu'
import Hamburger from './hamburger'
import Colors from './colors'


class Nav extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            containerStyle: { 
                height: '50px'
            },
            menuStyle: {
                borderBottom: `2px solid ${Colors.white}`,
                fontSize: '2rem'
            }
        }
        this.enter = this.enter.bind(this);
        this.exit = this.exit.bind(this);
    }

    enter() {
        this.setState({
            menuStyle: {
                borderBottom: `2px solid ${Colors.white}`,
                fontSize: '2rem'
            }
        })
    }
    exit = () => {
        this.setState({
            menuStyle: {
                borderBottom: 'none',
                fontSize: '1em'
            }
        })
    }
    render() {

        return (
          <div
            style={this.state.containerStyle}
            className={navStyles.container}
            onMouseEnter={this.enter}
            // onMouseLeave={this.exit}
            onScroll={this.handleScroll}
          >
            <div className={navStyles.contents}>
              <Logo />
            </div>
            <div className={navStyles.menu} style={this.state.menuStyle}>
              <Menu />
            </div>
            <div>
              <Hamburger className={navStyles.hamburger} />
            </div>
          </div>
        )
    }
}
export default Nav

