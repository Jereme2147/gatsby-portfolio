import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

const Head = ({ title }) => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                    author
                }
            }
        }
    `)
    return (
        <Helmet title={`${title} | ${data.site.siteMetadata.title}`}>
            <meta
                name="viewport"
                content="width=device-width,initial-scale=1,shrink-to-fit=no,viewport-fit=cover"
            />
            <meta property="og:type" content="website" />
            <meta property="description" name="description" content="
            Website development and design. Mobile responsive pages the way you want it."/>
            <meta property="description" name="description" content="
            Avery County, Watauga County."/>
            <meta property="description" name="description" content="
            Social Media Management"/>
            <meta property="description" name="description" content="
            Gatsbyjs WordPress"/>
        </Helmet>
    )
}

export default Head;