import './globals.css';
import { headers } from 'next/headers';
import Link from 'next/link';

import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

import { cookieToInitialState } from 'wagmi';

import { config } from '@/config/wagmi';
import Web3ModalProvider from '@/components/Web3ModalProvider';
import ScrollToTopButton from '@/components/ScrollToTop';

import Head from './head';

import { Roboto_Mono } from 'next/font/google';

const mono = Roboto_Mono({ subsets: ['latin'], weight: ['400', '700'] });

export const metadata = {
  title: 'Wonj',
  description: 'A personal website of Wonjae Choi.',
  icons: {
    icon: '/favicon.png',
  },
};

export default function RootLayout({ children }) {
  const header = (
    <div className="flex flex-col">
      <header className="flex items-center gap-4 justify-between p-4 relative">
        <Link href={'/'}>
          <h1 className="specialShadow text-2xl sm:text-3xl font-press-start">
            &#62;&#62; wonj.eth
          </h1>
        </Link>
      </header>
    </div>
  );

  const footer = (
    <footer className="py-20 flex items-center justify-center px-2">
      <Link href={'/'} className="specialShadow">
        <i className="fa-regular fa-copyright fa-sm"></i>{' '}
        <span className="font-press-start text-blue-100 text-xs">
          wonj.eth 2024 👾
        </span>
      </Link>
    </footer>
  );

  const gtmNoScriptHTML = {
    __html: `
      <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WNCSR8P9"
      height="0" width="0" style="display:none;visibility:hidden"></iframe>
    `,
  };

  const initialState = cookieToInitialState(config, headers().get('cookie'));

  return (
    <html lang="en">
      <Head />
      <body
        className={
          'bg-[#030615] text-blue-100 flex flex-col gap-4 sm:gap-6 md:gap-10 min-h-screen p-4 text-sm sm:text-base ' +
          mono.className
        }
      >
        {/* Google Tag Manager (noscript) */}
        <noscript dangerouslySetInnerHTML={gtmNoScriptHTML}></noscript>
        {/* End Google Tag Manager (noscript) */}
        <Web3ModalProvider initialState={initialState}>
          <div className="flex justify-center sm:justify-end gap-1">
            <w3m-network-button />
            <w3m-button label="Connect" />
          </div>
          {header}
          {children}
          {footer}
          <div className="hidden lg:flex">
            <ScrollToTopButton />
          </div>
        </Web3ModalProvider>
      </body>
      <Analytics />
      <SpeedInsights />
    </html>
  );
}
