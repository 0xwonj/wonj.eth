import Image from 'next/image';
import React from 'react';

import AboutSections from '@/components/AboutSections';
import MainWrapper from '@/components/MainWrapper';

export const metadata = {
  title: 'Wonj ⋅ About',
  description: 'Blockchain Developer & Researcher at SNU VMO Lab and Decipher',
};

export default function AboutPage() {
  let educationData = [
    {
      institution: 'Seoul National University',
      location: 'Korea',
      title: 'MS/PH.D IN COMPUTER SCIENCE',
      timeframe: 'Sep. 2024 - Expected',
      details: [
        'Virtual Machine & Optimization Lab',
        'Focus on blockchain core research and development.',
        'Currently participating as an undergraduate research intern.',
      ],
      links: {
        website: 'https://altair.snu.ac.kr/',
      },
    },
    {
      institution: 'Yonsei University',
      location: 'Korea',
      title: 'B.S. CANDIDATE IN COMPUTER SCIENCE',
      timeframe: 'Mar. 2020 - Aug. 2024',
      details: ['Scholarship Granted by WeMade (₩ 5,000,000)'],
    },
  ];
  let workingExperienceData = [
    {
      institution: 'Seoul National University VMO Lab',
      location: 'Korea',
      title: 'UNDERGRADUATE RESEARCH INTERN',
      timeframe: 'Feb. 2024 - Present',
      details: [
        'Working as an intern researching blockchain core.',
        'Will begin my Integrated Master’s and Ph.D studies in September 2024.',
      ],
    },
    {
      institution: 'XRPL Korea',
      location: 'Korea',
      title: 'DEVELOPER RELATIONS',
      timeframe: 'June. 2023 - Sep. 2023',
      details: [
        'Made technical documentation for Korean XRPL developers.',
        'Held a one hour developer session about the core of XRPL at the meetup.',
        'Provided technical support for the XRPL developers.',
      ],
      links: {
        twitter: 'https://twitter.com/xrplkorea',
      },
    },
    {
      institution: 'Web3Mon',
      location: 'Remote',
      title: 'BLOCKCHAIN DEVELOPER',
      timeframe: 'Feb. 2023 - May. 2023',
      details: [
        'Made smart contracts using Rust for Solana.',
        'Maintained and developed Rust backend server.',
        'Conducted research on optimizing virtual state channel for crosschain implementation.',
      ],
      links: {
        website: 'https://docs.web3mon.io/',
        twitter: 'https://twitter.com/web3mon',
      },
    },
    {
      institution: 'Contract in Person',
      location: 'Remote',
      title: 'QUANTITATIVE DEVELOPER',
      timeframe: 'Oct. 2021 - Jan. 2023',
      details: [
        'Algorithmic Trading: Developed trading algorithms using technical analysis and AI.',
        'DEX Arbitrage: Conducted research on various MEVs.',
        'Developed a cross‑DEX, cyclic arbitrage bot using flash swap.',
        'AUM $400k',
      ],
      links: {
        github: 'https://github.com/wonj1012/trading',
      },
    },
  ];
  let extracurricularActivitiesData = [
    {
      institution: 'Decipher, Seoul National University',
      location: 'Korea',
      title: 'BLOCKCHAIN RESEARCHER',
      timeframe: 'Sep. 2023 - Present',
      details: [
        'A member of Decipher, a blockchain research group at Seoul National University.',
        'Technical research and sessions about various topics of blockchain.',
        'Team Opensource Warriors: Contributed to ERC‑6900 github and Alchemy team.',
        'ZK Research Team: Conducted various research on ZKP and rollup architectures.',
      ],
      links: {
        website: 'https://medium.com/decipher-media',
        github: 'https://github.com/decipherhub',
        twitter: 'https://twitter.com/DecipherGlobal',
      },
    },
    {
      institution: 'Blockchain at Yonsei, Yonsei University',
      location: 'Korea',
      title: 'TECH LEAD & BOARD MEMBER',
      timeframe: 'Sep. 2022 - Aug. 2023',
      details: [
        'Completed two semester activity of Blockchain at Yonsei, a blockchain academic club based on Yonsei University.',
        'Drove research initiatives on emerging topics in blockchain and web3 technologies.',
        'Held 2 hours sessions about Solidity smart contracts for 6 weeks as a lecturer.',
      ],
      links: {
        website: 'https://www.blockchainatyonsei.com/',
        twitter: 'https://twitter.com/BlockchainatYU',
      },
    },
    {
      institution: 'Morgorithm, Yonsei University',
      location: 'Korea',
      title: 'MEMBER',
      timeframe: 'Mar. 2020 - Mar. 2022',
      details: [
        'Solved and learned algorithm problems in depth and improved coding skills.',
        'Participated Morgorithm algorithm camp, studied various in‑depth algorithms.',
        'Participated ICPC Sinchon, which is an algorithm competition',
      ],
    },
  ];

  return (
    <MainWrapper>
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-center sm:justify-start">
          <h2 className="textGradient font-press-start text-3xl">
            Wonjae Choi
          </h2>
        </div>
      </div>
      <div className="flex flex-col gap-8 text-blue-300 sm:flex-row sm:items-stretch">
        <div className="flex items-center justify-center sm:justify-start">
          <Image
            className="rounded-full"
            height={200}
            width={200}
            src="/images/profile.jpg"
            alt="profile-img"
          />
        </div>
        <div className="flex flex-col gap-2 text-base sm:text-lg">
          <div className="flex flex-1 items-center gap-2 ">
            <div className="grid w-8 place-items-center">
              <i className="fa-solid fa-graduation-cap"></i>
            </div>
            Blockchain Researcher at SNU VMO Lab
          </div>
          <div className="flex flex-1 items-center gap-2 ">
            <div className="grid w-8 place-items-center">
              <i className="fa-solid fa-users"></i>
            </div>
            Member of Decipher
          </div>
          <div className="flex flex-1 items-center gap-2 ">
            <div className="grid w-8 place-items-center">
              <i className="fa-solid fa-lightbulb"></i>
            </div>
            Building Something in Stealth Mode..
          </div>
        </div>
      </div>
      <p className="leading-relaxed text-blue-100">
        Hi, I&apos;m Wonjae Choi, a passionate blockchain developer and
        researcher. I&apos;m currently studying and developing blockchain
        focusing on the scalability and security of blockchain. I&apos;m also
        building something in stealth mode.
      </p>
      <hr className="border-t-2 border-blue-200" />
      <AboutSections
        educationData={educationData}
        workingExperienceData={workingExperienceData}
        extracurricularActivitiesData={extracurricularActivitiesData}
      />
    </MainWrapper>
  );
}
