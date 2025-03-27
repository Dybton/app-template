import type { AppProps } from "next/app";
import localFont from "next/font/local";
import Head from "next/head";
import "@/frontend/globals.css";
import Providers from "../frontend/providers/Providers";
import { Toast } from "@/frontend/components/Toast";

const geistSans = localFont({
  src: "../frontend/styles/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../frontend/styles/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Placeholder</title>
        <meta name='description' content='Placeholder' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <div
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col h-screen`}
      >
        <Providers>
          <div className='flex-1 overflow-auto bg-[#F9FAFB]'>
            <Component {...pageProps} />
          </div>
          <Toast />
        </Providers>
      </div>
    </>
  );
}
