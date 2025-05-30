import { Html, Head, Main, NextScript } from "next/document";
import { useEffect } from "react";



export default function Document() {

  useEffect(() => {
    // Google Tag Manager script
    (function (w: Window & { [key: string]: any }, d: Document, s: string, l: string, i: string) {
      w[l] = w[l] || [];
      w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
      const f = d.getElementsByTagName(s)[0];
      const j = d.createElement(s) as HTMLScriptElement;
      const dl = l != 'dataLayer' ? '&l=' + l : '';
      j.async = true;
      j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
      
      if (f && f.parentNode) { // Verifica que f y f.parentNode no sean null
        f.parentNode.insertBefore(j, f);
      }
    })(window, document, 'script', 'dataLayer', 'GTM-P8M96BKF');
  }, []);



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

        {/* Meta Pixel Code */}
        <script dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '404805201126144');
            fbq('track', 'PageView');
          `,
        }} />
        <noscript>
          <img height="1" width="1" style={{ display: 'none' }} src="https://www.facebook.com/tr?id=404805201126144&ev=PageView&noscript=1" />
        </noscript>
        {/* End Meta Pixel Code */}

         {/* Google Tag Manager (noscript) */}
         <noscript>
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-P8M96BKF"
            height="0" width="0" style={{ display: 'none', visibility: 'hidden' }}>
          </iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
