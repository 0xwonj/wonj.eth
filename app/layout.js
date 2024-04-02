import './globals.css';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Roboto_Mono } from 'next/font/google';
import { headers } from 'next/headers';
import Link from 'next/link';
import React from 'react';
import { cookieToInitialState } from 'wagmi';

import ScrollToTopButton from '@/components/ScrollToTop';
import Web3Button from '@/components/Web3Button';
import Web3ModalProvider from '@/components/Web3ModalProvider';
import { config } from '@/config/wagmi';

import Head from './head';

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
      <header className="relative flex items-center justify-between gap-4 p-4">
        <Link href={'/'}>
          <h1 className="specialShadow font-press-start text-2xl sm:text-3xl">
            &#62;&#62; wonj.eth
          </h1>
        </Link>
      </header>
    </div>
  );

  const footer = (
    <footer className="flex items-center justify-center px-2 py-20">
      <Link href={'/'} className="specialShadow">
        <i className="fa-regular fa-copyright fa-sm text-blue-100"></i>{' '}
        <span className="font-press-start text-xs text-blue-100">
          wonj.eth 2024
        </span>
        <span className="orangeShadow text-sm"> 🔥 </span>
      </Link>
    </footer>
  );

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
        <Web3ModalProvider initialState={initialState}>
          <Web3Button />
          {header}
          {children}
          {footer}
          <div className="hidden lg:flex">
            <ScrollToTopButton />
          </div>
        </Web3ModalProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
