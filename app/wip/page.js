import Image from 'next/image';
import React from 'react';

import MainWrapper from '@/components/MainWrapper';

export const metadata = {
  title: 'Wonj ⋅ WIP',
  description: 'Work in Progress',
};

export default function WipPage() {
  return (
    <MainWrapper>
      <h1 className="font-press-start text-3xl text-amber-300">
        Work in Progress
        <i className="fa-solid fa-person-digging ml-4 text-4xl"></i>
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
