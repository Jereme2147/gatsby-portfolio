import React from "react"
import Layout from '../components/layout.js';
// import indexStyles from '../components/index.module.scss'
import CardHolder from '../components/cardHolder.js';
import Head from '../components/head.js'
import PageTitle from '../components/pageTitle'



const IndexPage = () => {
  
    return (
        <Layout>
            <Head title={'Home'} />
            <PageTitle />
           <CardHolder />
        </Layout>
    )
}

export default IndexPage;
