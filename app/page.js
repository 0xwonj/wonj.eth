import Link from 'next/link';
import React from 'react';

import MagicBookButton from '@/components/MagicBookButton';
import MainWrapper from '@/components/MainWrapper';
import sections from '@/data/home/sections.json';

function LinkSection(props) {
  const { title, array, color, children } = props;

  const textColorClass =
    {
      purple: 'text-purple-400',
      pink: 'text-pink-400',
      blue: 'text-blue-400',
      amber: 'text-amber-400',
      orange: 'text-orange-400',
      red: 'text-red-400',
    }[color] || 'text-blue-400';

  const hoverTextColorClass =
    {
      purple: 'hover:text-purple-300',
      pink: 'hover:text-pink-300',
      blue: 'hover:text-blue-300',
      amber: 'hover:text-amber-300',
      orange: 'hover:text-orange-300',
      red: 'hover:text-red-300',
    }[color] || 'hover:text-blue-300';

  return (
    <section className="grid grid-cols-1 flex-col gap-4 md:grid-cols-2">
      <h3 className={`${textColorClass} font-press-start md:col-span-2`}>
        ✦ {title} ✦
      </h3>
      {array &&
        array.map((link, linkIndex) => {
          const textSizeClass =
            link.name.length >= 12 ? 'text-sm' : 'text-base';
          return (
            <Link
              href={link.link}
              target={link.target}
              key={linkIndex}
              className={`btnBorder relative grid place-items-center rounded-lg bg-blue-950 p-4 text-blue-100 ${hoverTextColorClass}`}
            >
              <i
                className={`absolute left-4 top-1/2 -translate-y-1/2 text-xl ${
                  linkIndex < 4 && title === 'Links' ? 'specialShadow' : ''
                } ${link.icon}`}
              ></i>
              <p
                className={`${textSizeClass} ${
                  [].includes(link.name) ? 'specialShadow' : ''
                } font-press-start`}
              >
                {link.name}
              </p>
            </Link>
          );
        })}
      {children}
    </section>
  );
}

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
              className="btnBorder relative grid place-items-center rounded-lg bg-blue-900 p-3 text-blue-100 hover:text-cyan-300"
            >
              <i className={'text-3xl ' + link.icon}></i>
            </Link>
          );
        })}
      </section>
    </MainWrapper>
  );
}
