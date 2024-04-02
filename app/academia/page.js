import Link from 'next/link';
import React from 'react';

import getPostMetadata from '@/components/getPostMetadata';
import MainWrapper from '@/components/MainWrapper';

export const metadata = {
  title: 'Wonj ⋅ Academia',
  description: '',
};

const PostPreview = props => {
  return (
    <div className="flex flex-col gap-2">
      <span className="font-press-start text-xs text-purple-300">
        {props.date}
      </span>
      <Link href={`/academia/${props.slug}`}>
        <h2 className="font-press-start text-base text-white duration-200 hover:text-purple-300 sm:text-lg md:text-xl">
          {props.title}
        </h2>
      </Link>
      <div className="flex items-center justify-between">
        <span>&rarr; {props.subtitle}</span>
        <span className="whitespace-nowrap text-xs capitalize">
          {props.category === 'blockchain' ? (
            <Link href="/academia/blockchain">
              <span className="font-press-start text-green-300 hover:text-green-500">
                {props.category.replaceAll('-', ' ')}
              </span>
            </Link>
          ) : props.category === 'computer-science' ? (
            <Link href="/academia/computer-science">
              <span className="font-press-start text-red-300 hover:text-red-500">
                CS
              </span>
            </Link>
          ) : (
            <Link href="/academia/etc">
              <span className="font-press-start text-cyan-300 hover:text-cyan-500">
                {props.category.replaceAll('-', ' ')}
              </span>
            </Link>
          )}
        </span>
      </div>
    </div>
  );
};

export default function PostsPage() {
  const postMetadata = getPostMetadata('academia');

  return (
    <MainWrapper>
      <h3 className="font-press-start text-purple-400">✦ Academia ✦</h3>
      <div className="flex justify-center">
        <Link href="/academia/blockchain">
          <span className="font-press-start text-green-300 hover:text-green-500">
            Blockchain
          </span>
        </Link>
        <span className="mx-2">|</span>
        <Link href="/academia/computer-science">
          <span className="font-press-start text-red-300 hover:text-red-500">
            CS
          </span>
        </Link>
        <span className="mx-2">|</span>
        <Link href="/academia/etc">
          <span className="font-press-start text-cyan-300 hover:text-cyan-500">
            Etc
          </span>
        </Link>
      </div>
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
