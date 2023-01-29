import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/layout/layout";
import { NotificationContextProvider } from "../store/notification-context";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NotificationContextProvider>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Krutika's blog" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </NotificationContextProvider>
  );
}
