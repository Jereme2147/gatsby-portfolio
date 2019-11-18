import React from 'react';
import layoutStyle from '../styles/layout.module.scss';
import  Nav from './nav'
import Footer from './footer';
// import Helmet from 'react-helmet';
import Head from './head'


class Layout extends React.Component {
    constructor(props){
        super(props);
        this.navElement = React.createRef();
        this.state = {
            title: "Portfolio"
        }
    }
    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
    }
    componentWillUnmount(){
    window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {
        const currentScrollPos = window.pageYOffset;
        if( currentScrollPos > 30 ){
            this.navElement.current.exit();
        }else {
            this.navElement.current.enter();
        }
    }
    render(props) {
        return (
          <div className={layoutStyle.container}>
            <div className={layoutStyle.clip}></div>
            <Nav ref={this.navElement}></Nav>
            {this.props.children}
            <Footer />
          </div>
        )
    }
    
}

export default Layout;
