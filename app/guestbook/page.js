'use client';
import BlueBtn from '@/components/BlueBtn';
import MainWrapper from '@/components/MainWrapper';
import GuestBook from '@/components/GuestBook';
import { Press_Start_2P } from 'next/font/google';
import Link from 'next/link';
import React from 'react';

const press = Press_Start_2P({ subsets: ['latin'], weight: ['400'] });

export default function ContactPage() {
  return (
    <MainWrapper>
      <GuestBook />
    </MainWrapper>
  );
}
