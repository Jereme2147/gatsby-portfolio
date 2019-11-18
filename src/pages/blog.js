import React from "react"
import Layout from '../components/layout.js';
import { Link, graphql, useStaticQuery } from 'gatsby'
// import blogStyles from '../components/blog.module.scss'



const BlogPage = () => {
    const data = useStaticQuery(graphql`
    query {
	    allMarkdownRemark (
            sort: {
            fields: [frontmatter___date]
            order: DESC
            }
            )
          {
            edges {
                node {
                    frontmatter {
                            title
                            date
                            }
                            fields {
                                slug
                            }
                    }
                }
            }
        }
    `
    )
    return (
        <Layout>
       
        </Layout>
    )
}

export default BlogPage;