import Link from 'next/link';
import React from 'react';

import LinkSection from '@/components/LinkSection';
import MagicBookButton from '@/components/MagicBookButton';
import MainWrapper from '@/components/MainWrapper';
import sections from '@/data/home/sections.json';

export default function HomePage() {
  const { profile, academia, personal, socials } = sections;

  return (
    <MainWrapper>
      <LinkSection title={'Profile'} array={profile} color={'blue'} />
      <LinkSection title={'Academia'} array={academia} color={'purple'} />
      <LinkSection title={'Personal'} array={personal} color={'orange'} />
      <MagicBookButton href={'/guestbook'} title={'Guestbook'} />
      <section className="flex flex-wrap items-center justify-between sm:justify-center sm:gap-4">
        {socials.map((link, linkIndex) => {
          return (
            <Link
              href={link.link}
              target={link.target}
              key={linkIndex}
              className="slateBtnBorder relative grid place-items-center rounded-lg bg-slate-100 p-3 text-slate-900 hover:text-slate-700"
            >
              <i className={'text-3xl ' + link.icon}></i>
            </Link>
          );
        })}
      </section>
    </MainWrapper>
  );
}
