import Image from 'next/image';
import React from 'react';

import MainWrapper from '@/components/MainWrapper';

export const metadata = {
  title: 'Wonj ⋅ WEB3',
  description: 'My Web3 Journey',
};

export default function AboutPage() {
  return (
    <MainWrapper>
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-center sm:justify-start">
          <h2 className="textGradientFlame font-press-start text-3xl">
            wonj.eth
          </h2>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <Image
          className="rounded-full"
          src="/images/Elements-2273.png"
          alt="elements-img"
          width={400}
          height={400}
        />
      </div>
      <p className="leading-relaxed text-orange-50">
        Hey there! It&apos;s wonj.eth. It has been about a year since I made my
        home at Web3 space. I like the culture of Web3, and I am excited to see
        how it will change the world. These are my curated journey of Web3. I
        hope you enjoy it! 🔥
      </p>
      <hr className="mb-6 border-t-2 border-orange-200" />
      <h2 className="font-press-start text-2xl text-orange-400">Blockchains</h2>
      <h2 className="font-press-start text-2xl text-orange-400">NFTs</h2>
    </MainWrapper>
  );
}
