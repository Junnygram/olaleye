import { Layout } from '@/components/layout';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps, router }: AppProps) {
  const isHomePage = router.pathname === '/';
  return (
    <>
      {isHomePage ? (
        <Component {...pageProps} />
      ) : (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      )}
    </>
  );
}
