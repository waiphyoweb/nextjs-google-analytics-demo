import { AppProps } from 'next/app';
import Head from 'next/head';
import React, { useEffect } from 'react';
import '../styles/Home.module.css';
import Script from 'next/script';
import Router from 'next/router';


function CustomApp({ Component, pageProps, router }: AppProps) {

    return (
        <>
            <Script strategy="lazyOnload" src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`} />

            <Script strategy="lazyOnload">
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
                    page_path: window.location.pathname,
                    });
                `}
            </Script>
            
            
            <Head>
                <title>Welcome!</title>
                <meta name="viewport" content="initial-scale=1, width=device-width" />
            </Head>

            <Component {...pageProps} />
        </>
    );
}


export default CustomApp;