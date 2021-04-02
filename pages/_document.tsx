import Document, {
  DocumentContext,
  DocumentInitialProps,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document'
import { GA_TRACKING_ID } from '../lib'
import { isProduction } from '../utils'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    const initialProps: DocumentInitialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    console.log('GA tracking', GA_TRACKING_ID)
    return (
      <Html>
        <Head>
          {isProduction && (
            <>
              <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`} />
              <script
                dangerouslySetInnerHTML={{
                  __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_TRACKING_ID}', {
                page_path: window.location.pathname,
                });
                `,
                }}
              />
            </>
          )}
          <link rel='preconnect' href='https://fonts.gstatic.com' />
          <link
            href='https://fonts.googleapis.com/css2?family=JetBrains+Mono&family=Montserrat&display=swap'
            rel='stylesheet'
          />
          <link rel='shortcut icon' href='/favicon.png' />
        </Head>
        <body className='bg-blue-50 text-black dark:bg-gray-900 dark:text-white'>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
