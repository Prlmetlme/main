import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html lang='en'>
            <Head />
                <meta name="description" content="Keen Slider"/>
                <link rel="icon" href="/favicon.ico" />
                <link rel="preconnect" href="https://fonts.googleapis.com" /> 
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Allura&display=swap" rel="stylesheet" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Allura&family=Montserrat:wght@300&display=swap" rel="stylesheet" /> 
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}