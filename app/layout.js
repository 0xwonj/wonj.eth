import './globals.css';
import { headers } from 'next/headers';
import Link from 'next/link';

import { Analytics } from '@vercel/analytics/react';

import { cookieToInitialState } from 'wagmi';

import { config } from '@/config/wagmi';
import Web3ModalProvider from '@/components/Web3ModalProvider';

import { Inter, Press_Start_2P, Roboto_Mono } from 'next/font/google';
import Head from './head';

const space = Roboto_Mono({ subsets: ['latin'], weight: ['400', '700'] });
const press = Press_Start_2P({ subsets: ['latin'], weight: ['400'] });

export const metadata = {
  title: 'Wonj',
  description: 'Blockchain Developer & Researcher at SNU VMO Lab and Decipher',
  icons: {
    icon: '/favicon.png',
  },
};

export default function RootLayout({ children }) {
  const header = (
    <div className="flex flex-col">
      {/* <Countdown /> */}
      {/* <p className={"textGradient text-xs sm:text-sm text-center " }>Share your success story &rarr;</p> */}
      <header className="flex items-center gap-4 justify-between p-4 relative">
        {/* <div className="animatedBorder"><div></div></div> */}
        <Link href={'/'}>
          <h1
            className={'specialShadow text-2xl sm:text-3xl ' + press.className}
          >
            &#62;&#62; wonj.eth
          </h1>
          {/* <h1 className={"textGradient halfShadow " + press.className}>&#62;&#62;Learn to code</h1> */}
        </Link>
        {/* <nav className="flex items-center gap-8">
        <Link className="relative after:absolute after:h-full after:w-full after:top-0 after:right-full after:bg-blue-100 after:duration-200 after:ease-in-out hover:after:translate-x-full group overflow-hidden" href={'/'}>
        <p className="z-[1] relative duration-200 group-hover:text-[#030615]">Blog </p>
        </Link>
        <Link className="relative after:absolute after:h-full after:w-full after:top-0 after:right-full after:bg-blue-100 after:duration-200 after:ease-in-out hover:after:translate-x-full group overflow-hidden" href={'/'}>
        <p className="z-[1] relative duration-200 group-hover:text-[#030615]">Notes </p>
        </Link>
        <Link className="relative after:absolute after:h-full after:w-full after:top-0 after:right-full after:bg-blue-100 after:duration-200 after:ease-in-out hover:after:translate-x-full group overflow-hidden" href={'/'}>
        <p className="z-[1] relative duration-200 group-hover:text-[#030615]">Roadmap  </p>
        </Link>
      </nav> */}
      </header>
    </div>
  );

  const footer = (
    <footer className="py-20 flex items-center justify-center px-2">
      <Link href={'/'} className="specialShadow">
        <i className="fa-regular fa-copyright fa-sm"></i> wonj.eth 2024 👾
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
          space.className
        }
      >
        <Web3ModalProvider initialState={initialState}>
          <div className="flex justify-center sm:justify-end gap-1">
            <w3m-network-button />
            <w3m-button label="Connect" />
          </div>

          {header}
          {children}
          {footer}
          <Analytics />
        </Web3ModalProvider>
      </body>
    </html>
  );
}
