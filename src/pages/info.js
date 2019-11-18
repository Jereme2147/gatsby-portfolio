import React from 'react';
import Layout from '../components/layout';
import infoStyles from '../styles/info.module.scss'
import Head from '../components/head'

const Info = () => {
    return (
        <Layout>
            <Head title={"Information"}/>
            <div className={infoStyles.container}>
                <div className={infoStyles.title}>
                    <h1>Jereme Daniels | Developer</h1>
                </div>
                <div className={infoStyles.contact}>
                    <h2><a href="#">jereme@jeremedaniels.com</a></h2>
                    <h2>828-898-2942</h2>
                    <img src="/telephone.jpg" alt="telephone">
                    </img>
                    <p>Social Media Contacts
                        <ul>
                            <li><a href="https://www.instagram.com/jd2147/">-Instagram-</a></li>
                            <li><a href="https://twitter.com/JD2147">-Twitter-</a></li>
                            <li><a href="https://github.com/Jereme2147">-GitHub-</a></li>
                        </ul>
                    </p>
                </div>
                <div className={infoStyles.services}>
                    <p>
                        I build "Mobile first" websites using a variety of 
                        frameworks and Content Management Systems. From Gatsbyjs 
                        to WordPress.  
                    </p>
                    <p>
                        The first impression of your business or website is almost 
                        exclusively on a mobile device.  It's for this reason I build 
                        websites mobile first.  The goal is a page that loads fast, isn't 
                        cluttered, and provides the information needed easily.  
                    </p>
                    <p>
                        I am an ALL-IN-ONE servcice.  You as the 
                        customer can be entirely hands off, or contribute.  Your options 
                        include, but are not limited to: WordPress, pure HTML/CSS, Gatsby, 
                        and other options.  
                    </p>
                    <img src="/social.jpg" alt="social media images"></img>
                    <p>
                        Social Media Management services are also provided. This can 
                        include posting, responding, and creating of content. Consulting 
                        services are also avialible.
                    </p>
                </div>
            </div>
        </Layout>
        
    )
};
export default Info;