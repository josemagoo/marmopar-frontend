import { Html, Head, Main, NextScript } from "next/document";



export default function Document() {




  return (
    <Html lang="es">
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
          integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-K1PFHXKF8N"
        ></script>

        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(...args) {
                dataLayer.push(args);
              }
              gtag('js', new Date());
              gtag('config', 'G-K1PFHXKF8N');
            `,
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
