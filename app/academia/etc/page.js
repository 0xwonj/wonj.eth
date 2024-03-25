import MainWrapper from '@/components/MainWrapper';
import getPostMetadata from '@/components/getPostMetadata';
import Link from 'next/link';
import React from 'react';

import { Inter, Press_Start_2P, Space_Mono } from 'next/font/google';
const press = Press_Start_2P({ subsets: ['latin'], weight: ['400'] });

export const metadata = {
  title: 'Wonj ⋅ Etc',
  description: '',
};

const PostPreview = props => {
  return (
    <div className="flex flex-col gap-2">
      <p className={'text-xs text-purple-300  ' + press.className}>
        {props.date}
      </p>
      <Link href={`/academia/etc/${props.slug}`}>
        <h2
          className={
            'text-base text-white sm:text-lg md:text-xl hover:text-purple-300 duration-200 ' +
            press.className
          }
        >
          {props.title}
        </h2>
      </Link>
      <div className="flex items-center justify-between">
        <p className="">&rarr; {props.subtitle}</p>
        <p
          className={
            'whitespace-nowrap text-xs capitalize text-cyan-300 ' +
            press.className
          }
        >
          {props.subcategory.replaceAll('-', ' ')}
        </p>
      </div>
    </div>
  );
};

export default function PostsPage() {
  const postMetadata = getPostMetadata('docs', 'etc');

  return (
    <MainWrapper>
      <h3 className={'text-purple-400 ' + press.className}>✦ Etc ✦</h3>
      {postMetadata
        .sort((a, b) => {
          return new Date(b.date) - new Date(a.date);
        })
        .map(post => (
          <PostPreview key={post.slug} {...post} />
        ))}
    </MainWrapper>
  );
}
