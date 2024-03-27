import MainWrapper from '@/components/MainWrapper';
import React from 'react';

import { Press_Start_2P } from 'next/font/google';
const press = Press_Start_2P({ subsets: ['latin'], weight: ['400'] });

export const metadata = {
  title: 'Wonj ⋅ About',
  description: 'Blockchain Developer & Researcher at SNU VMO Lab and Decipher',
};

export default function ExperiencePage() {
  let education = [
    {
      institution: 'Seoul National University',
      location: 'Korea',
      degree: 'MS/PH.D IN COMPUTER SCIENCE',
      enrollment: 'Sep. 2024 - Expected',
      details: [
        'Virtual Machine & Optimization Lab',
        'Focus on blockchain core research and development.',
        'Currently participating as an undergraduate research intern.',
      ],
      website: 'https://altair.snu.ac.kr/',
    },
    {
      institution: 'Yonsei University',
      location: 'Korea',
      degree: 'B.S. CANDIDATE IN COMPUTER SCIENCE',
      enrollment: 'Mar. 2020 - Aug. 2024',
      details: ['Scholarship Granted by WeMade (₩ 5,000,000)'],
    },
  ];
  let workingExperience = [
    {
      position: 'UNDERGRADUATE RESEARCH INTERN',
      company: 'Seoul National University VMO Lab',
      location: 'Korea',
      duration: 'Feb. 2024 - Present',
      details: [
        'Working as an intern researching blockchain core.',
        'Will begin my Integrated Master’s and Ph.D studies in September 2024.',
      ],
    },
    {
      position: 'DEVELOPER RELATIONS',
      company: 'XRPL Korea',
      location: 'Korea',
      duration: 'June. 2023 - Sep. 2023',
      details: [
        'Made an technical documentation for Korean XRPL developers.',
        'Held a one hour developer session about the core of XRPL at the meetup.',
        'Provided technical support for the XRPL developers.',
      ],
      twitter: 'https://twitter.com/xrplkorea',
    },
    {
      position: 'BLOCKCHAIN DEVELOPER',
      company: 'Web3Mon',
      location: 'Remote',
      duration: 'Feb. 2023 - May. 2023',
      details: [
        'Made smart contracts using Rust for Solana.',
        'Maintained and developed Rust backend server.',
        'Conducted research on optimizing virtual state channel for crosschain implementation.',
      ],
      website: 'https://docs.web3mon.io/',
      twitter: 'https://twitter.com/web3mon',
    },
    {
      position: 'QUANTITATIVE DEVELOPER',
      company: 'Contract in Person',
      location: 'Remote',
      duration: 'Oct. 2021 - Jan. 2023',
      details: [
        'Algorithmic Trading: Developed trading algorithms using technical analysis and AI.',
        'DEX Arbitrage: Conducted research on various MEVs.',
        'Developed a cross‑DEX, cyclic arbitrage bot using flash swap.',
        'AUM $400k',
      ],
      github: 'https://github.com/wonj1012/trading',
    },
  ];
  let extracurricularActivities = [
    {
      organization: 'Decipher',
      institution: 'Seoul National University, Korea',
      role: 'BLOCKCHAIN RESEARCHER',
      duration: 'Sep. 2023 - Present',
      details: [
        'A member of Decipher, a blockchain research group at Seoul National University.',
        'Technical research and sessions about various topics of blockchain.',
        'Team Opensource Warriors: Contributed to ERC‑6900 github and Alchemy team.',
        'ZK Research Team: Conducted various research on ZKP and rollup architectures.',
      ],
      website: 'https://medium.com/decipher-media',
      github: 'https://github.com/decipherhub',
      twitter: 'https://twitter.com/DecipherGlobal',
    },
    {
      organization: 'Blockchain at Yonsei',
      institution: 'Yonsei University, Korea',
      role: 'TECH LEAD & BOARD MEMBER',
      duration: 'Sep. 2022 - Aug. 2023',
      details: [
        'Completed two semester activity of Blockchain at Yonsei, a blockchain academic club based on Yonsei University.',
        'Drove research initiatives on emerging topics in blockchain and web3 technologies.',
        'Held 2 hours sessions about Solidity smart contracts for 6 weeks as a lecturer.',
      ],
      website: 'https://www.blockchainatyonsei.com/',
      twitter: 'https://twitter.com/BlockchainatYU',
    },
    {
      organization: 'Morgorithm (Algorithm Club at Yonsei University)',
      institution: 'Yonsei University, Korea',
      role: 'MEMBER',
      duration: 'Mar. 2020 - Mar. 2022',
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
        <div className="flex justify-center items-center sm:justify-start">
          <h2 className={'text-3xl specialShadow ' + press.className}>
            Wonjae Choi
          </h2>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row sm:items-stretch gap-8 text-blue-400">
        <div className="flex justify-center sm:justify-start items-center">
          <img
            className="rounded-full w-48 sm:w-32"
            src="images/profile.jpg"
            alt="profile-img"
          />
        </div>
        <div className="flex flex-col gap-2 text-base sm:text-lg">
          <div className="flex items-center flex-1 gap-2 ">
            <div className="grid place-items-center w-8">
              <i className="fa-solid fa-graduation-cap"></i>
            </div>
            MS/Ph.D Student at SNU VMO Lab
          </div>
          <div className="flex items-center flex-1 gap-2 ">
            <div className="grid place-items-center w-8">
              <i className="fa-solid fa-users"></i>
            </div>
            Member of Decipher
          </div>
          <div className="flex items-center flex-1 gap-2 ">
            <div className="grid place-items-center w-8">
              <i className="fa-solid fa-lightbulb"></i>
            </div>
            Building Something in Stealth Mode..
          </div>
        </div>
      </div>
      <p>
        Hi, I'm Wonjae Choi, a passionate blockchain developer and researcher.
        I'm currently studying and developing blockchain focusing on the
        scalability and security of blockchain. I'm also building something in
        stealth mode.
      </p>
      <hr className="border-t-2 border-blue-200" />
      <section className="flex flex-col gap-10">
        <h2 className={'text-2xl text-blue-400 ' + press.className}>
          ✦ Education ✦
        </h2>
        {education.map((edu, index) => (
          <div key={index} className="flex flex-col gap-2">
            <h3 className="text-xl text-blue-300">
              {edu.institution}, {edu.location}
            </h3>
            <p className="text-blue-200">
              {edu.degree} ({edu.enrollment})
            </p>
            <ul>
              {edu.details.map((detail, detailIndex) => (
                <li key={detailIndex} className="">
                  - {detail}
                </li>
              ))}
            </ul>
            <div className="flex flex-row flex-wrap gap-4 mt-2">
              {edu.website && (
                <a
                  href={edu.website}
                  target="_blank"
                  className="flex items-center gap-2 hover:text-blue-400 duration-200"
                >
                  <div>
                    <i className="fa-solid fa-globe"></i>
                  </div>
                  Website
                </a>
              )}
              {edu.github && (
                <a
                  href={edu.github}
                  target="_blank"
                  className="flex items-center gap-2 hover:text-blue-400 duration-200"
                >
                  <div>
                    <i className="fa-brands fa-github"></i>
                  </div>
                  Github
                </a>
              )}
              {edu.twitter && (
                <a
                  href={edu.twitter}
                  target="_blank"
                  className="flex items-center gap-2 hover:text-blue-400 duration-200"
                >
                  <div>
                    <i className="fa-brands fa-twitter"></i>
                  </div>
                  Twitter
                </a>
              )}
              {edu.link && (
                <a
                  href={edu.link}
                  target="_blank"
                  className="flex items-center gap-2 hover:text-blue-400 duration-200"
                >
                  <div>
                    <i className="fa-solid fa-link"></i>
                  </div>
                  Link
                </a>
              )}
            </div>
          </div>
        ))}
      </section>

      <section className="flex flex-col gap-10">
        <h2 className={'text-2xl text-blue-400 ' + press.className}>
          ✦ Working Experience ✦
        </h2>
        {workingExperience.map((work, index) => (
          <div key={index} className="flex flex-col gap-2">
            <h3 className="text-xl text-blue-300">
              {work.position} <br /> {work.company}, {work.location}
            </h3>
            <p className="text-blue-200">{work.duration}</p>
            <ul>
              {work.details.map((detail, detailIndex) => (
                <li key={detailIndex} className="">
                  - {detail}
                </li>
              ))}
            </ul>
            <div className="flex flex-row flex-wrap gap-4 mt-2">
              {work.website && (
                <a
                  href={work.website}
                  target="_blank"
                  className="flex items-center gap-2 hover:text-blue-400 duration-200"
                >
                  <div>
                    <i className="fa-solid fa-globe"></i>
                  </div>
                  Website
                </a>
              )}
              {work.github && (
                <a
                  href={work.github}
                  target="_blank"
                  className="flex items-center gap-2 hover:text-blue-400 duration-200"
                >
                  <div>
                    <i className="fa-brands fa-github"></i>
                  </div>
                  Github
                </a>
              )}
              {work.twitter && (
                <a
                  href={work.twitter}
                  target="_blank"
                  className="flex items-center gap-2 hover:text-blue-400 duration-200"
                >
                  <div>
                    <i className="fa-brands fa-twitter"></i>
                  </div>
                  Twitter
                </a>
              )}
              {work.link && (
                <a
                  href={work.link}
                  target="_blank"
                  className="flex items-center gap-2 hover:text-blue-400 duration-200"
                >
                  <div>
                    <i className="fa-solid fa-link"></i>
                  </div>
                  Link
                </a>
              )}
            </div>
          </div>
        ))}
      </section>

      <section className="flex flex-col gap-10">
        <h2 className={'text-xl text-blue-400 ' + press.className}>
          ✦ Extracurricular Activities ✦
        </h2>
        {extracurricularActivities.map((activity, index) => (
          <div key={index} className="flex flex-col gap-2">
            <h3 className="text-xl text-blue-300">
              {activity.role} <br /> {activity.organization},{' '}
              {activity.institution}
            </h3>
            <p className="text-blue-200">{activity.duration}</p>
            <ul>
              {activity.details.map((detail, detailIndex) => (
                <li key={detailIndex} className="">
                  - {detail}
                </li>
              ))}
            </ul>
            <div className="flex flex-row flex-wrap gap-4 mt-2">
              {activity.website && (
                <a
                  href={activity.website}
                  target="_blank"
                  className="flex items-center gap-2 hover:text-blue-400 duration-200"
                >
                  <div>
                    <i className="fa-solid fa-globe"></i>
                  </div>
                  Website
                </a>
              )}
              {activity.github && (
                <a
                  href={activity.github}
                  target="_blank"
                  className="flex items-center gap-2 hover:text-blue-400 duration-200"
                >
                  <div>
                    <i className="fa-brands fa-github"></i>
                  </div>
                  Github
                </a>
              )}
              {activity.twitter && (
                <a
                  href={activity.twitter}
                  target="_blank"
                  className="flex items-center gap-2 hover:text-blue-400 duration-200"
                >
                  <div>
                    <i className="fa-brands fa-twitter"></i>
                  </div>
                  Twitter
                </a>
              )}
              {activity.link && (
                <a
                  href={activity.link}
                  target="_blank"
                  className="flex items-center gap-2 hover:text-blue-400 duration-200"
                >
                  <div>
                    <i className="fa-solid fa-link"></i>
                  </div>
                  Link
                </a>
              )}
            </div>
          </div>
        ))}
      </section>
    </MainWrapper>
  );
}
