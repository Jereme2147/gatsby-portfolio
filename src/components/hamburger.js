import React from 'react'
import hamburgerStyles from '../styles/hamburger.module.scss'
import mobileMenuStyles from '../styles/mobileMenu.module.scss'
import Menu from './menu'
import { Link } from "gatsby"
// import classNames from 'classnames'
// const burgerClass = [hamburgerStyles.hamburger, hamburgerStyles.minus];
class Hamburger extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      burgerClass: [hamburgerStyles.hamburger, hamburgerStyles.minus],
      isShowing: false,
    }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick = () => {
    if (this.state.burgerClass.length == 2 ){
        this.setState({
          burgerClass: [
            hamburgerStyles.hamburger,
            hamburgerStyles.minus,
            hamburgerStyles.isActive,
          ],
          isShowing: 1,
        })
        console.log(this.state.isShowing)
    } else {
        console.log(this.state.isShowing)
        this.setState({
          burgerClass: [
            hamburgerStyles.hamburger,
            hamburgerStyles.minus,
          ],
              isShowing: false,
        })
    }
  }
  
  render() {
    return (
      <div>
        <button
          className={this.state.burgerClass.join(" ")}
          type="button"
          onClick={this.handleClick}
        >
          <span className={hamburgerStyles.hamburgerBox}>
            <span className={hamburgerStyles.hamburgerInner}></span>
          </span>
        </button>
        <div style={{ display: this.state.isShowing ? "block" : "none" }}
            className={mobileMenuStyles.menuDiv}>
          <Menu />
        </div>
      </div>
    )
  }
}

export default Hamburger