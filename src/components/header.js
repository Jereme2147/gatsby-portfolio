import React from 'react';
// import navStyles from './header.module.scss';
import { Link } from 'gatsby';
import { withPrefix } from "gatsby"
// import a from 'gatsby';
import { graphql, useStaticQuery } from 'gatsby'
const Header = () => {
   const data = useStaticQuery(graphql`
    {
      allFile(filter: { name: {eq: "logo"}}) {
        edges {
          node {
            publicURL
            name
          }
        }
      }
    }
   `)
    return (
        <div >
            header
        </div>
        
    );
};

export default Header;