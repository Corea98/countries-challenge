import React, { useContext } from 'react';
import Head from 'next/head';
import { Global, css } from '@emotion/core';

import Header from './Header';

import { DarkModeContext } from '../../context/DarkModeContext';

const Layout = props => {

    // Context
    const { darkMode } = useContext(DarkModeContext);

    return (
        <>
            <Global 
                styles={css`
                    body {
                        background-color: ${ darkMode ? '#202C37': '#FAFAFA'};
                        color: ${ darkMode ? 'white': 'black'};
                    }
                    
                    input[type="text"], select, header, a {
                        background-color: ${ darkMode ? '#2B3945': 'white'};
                        color: ${ darkMode ? 'white': 'black'};
                    }

                    a {
                        box-shadow: 1px 1px 2px black;
                    }

                    * {
                    }
                `}
            />
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