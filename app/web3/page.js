import MainWrapper from '@/components/MainWrapper';
import React from 'react';
import Image from 'next/image';

export const metadata = {
  title: 'Wonj ⋅ WEB3',
  description: 'My Web3 Journey',
};

export default function AboutPage() {
  return (
    <MainWrapper>
      <div className="flex flex-col gap-4">
        <div className="flex justify-center items-center sm:justify-start">
          <h2 className="text-3xl textGradientFlame font-press-start">
            wonj.eth
          </h2>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <Image
          className="rounded-full"
          src="/images/Elements-2273.png"
          alt="elements-img"
          width={400}
          height={400}
        />
      </div>
      <p className="text-orange-50 leading-relaxed">
        Hey there! It's wonj.eth. It has been about a year since I made my home
        at Web3 space. I like the culture of Web3, and I am excited to see how
        it will change the world. These are my curated journey of Web3. I hope
        you enjoy it! 🔥
      </p>
      <hr className="border-t-2 border-orange-200 mb-6" />
      <h2 className="text-2xl text-orange-400 font-press-start">Blockchains</h2>
      <h2 className="text-2xl text-orange-400 font-press-start">NFTs</h2>
    </MainWrapper>
  );
}
