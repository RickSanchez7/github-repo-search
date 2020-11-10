import Navbar from '../components/navbar';
import '../sass/styles.scss';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>Github Search</title>
      </Head>
      <Navbar />
      <div className='page'>
        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default MyApp;
