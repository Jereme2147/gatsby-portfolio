import React from "react"
import Layout from '../components/layout.js';
// import indexStyles from '../components/index.module.scss'
import CardHolder from '../components/cardHolder.js';
import Head from '../components/head.js'



const IndexPage = () => {
  
    return (
        <Layout>
            <Head title={'Home'} />
           <CardHolder />
        </Layout>
    )
}

export default IndexPage;
