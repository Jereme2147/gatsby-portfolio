import React from 'react'
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import cardHolderStyles from '../styles/cardHolder.module.scss'
import Img from "gatsby-image"


const CardHolder = () => {

const data = useStaticQuery(graphql`
  query {
    allMarkdownRemark (sort: {fields: frontmatter___date, order: DESC}){
    nodes {
      frontmatter {
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 900) {
              base64
              tracedSVG
              src
              srcSet
              srcWebp
              srcSetWebp
              sizes
              originalImg
              originalName
              presentationWidth
              presentationHeight
              aspectRatio
            }
          }
        }
        title
      }
      fields {
        slug
      }
    }
  }
  }
`)
    return (
      <div className={cardHolderStyles.container}
      style={{width: "100%",
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-around"
              }}>
        {data.allMarkdownRemark.nodes.map(node => {
          return (
            <div className={cardHolderStyles.card}>
              <Link to={`/blog/${node.fields.slug}`}>
                <h2>{node.frontmatter.title}</h2>
                <Img
                  fluid={node.frontmatter.featuredImage.childImageSharp.fluid}
                />
              </Link>
              
            </div>
          )
        })}
      </div>
    )
    
    }

export default CardHolder