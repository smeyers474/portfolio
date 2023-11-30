import { type AppType } from "next/app";
import Head from "next/head";
import { Raleway } from 'next/font/google'

import { api } from "~/utils/api";

import "~/styles/globals.css";
 
const raleway = Raleway({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-raleway'
})

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <div className={`${raleway.variable}`}>
      <Head>
        <title>Sarah Meyers</title>
        <meta name="description" content="Portfolio created by Sarah Meyers" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </div>
  );
};

export default api.withTRPC(MyApp);
