import MainWrapper from '@/components/MainWrapper';
import React from 'react';
import Image from 'next/image';

export const metadata = {
  title: 'Wonj ⋅ WIP',
  description: 'Work in Progress',
};

export default function WipPage() {
  return (
    <MainWrapper>
      <h1 className="text-3xl text-amber-300 font-press-start">
        Work in Progress
        <i className="text-4xl ml-4 fa-solid fa-person-digging"></i>
      </h1>
      <p>This page is currently under development.</p>
      <Image
        src="/images/sorry.gif"
        alt="Sorry!"
        width={500}
        height={500}
        unoptimized
      />
    </MainWrapper>
  );
}
