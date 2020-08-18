import React from 'react';
import Head from 'next/head';

import Header from './Header';

const Layout = props => {
    return (
        <>
            <Head>
                <title>Countries App</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w==" crossOrigin="anonymous" />
                <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;600;800&display=swap" rel="stylesheet" />
            </Head>

            <Header />

            <main>
                {props.children}
            </main>
        </>
    );
}
 
export default Layout;