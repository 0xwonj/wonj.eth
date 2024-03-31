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
      <span className="font-press-start text-xs  text-purple-300">
        {props.date}
      </span>
      <Link href={`/academia/blockchain/${props.slug}`}>
        <h2 className="font-press-start text-base text-white duration-200 hover:text-purple-300 sm:text-lg md:text-xl">
          {props.title}
        </h2>
      </Link>
      <div className="flex items-center justify-between">
        <span className="">&rarr; {props.subtitle}</span>
        <span className="whitespace-nowrap font-press-start text-xs capitalize text-green-300">
          {props.subcategory.replaceAll('-', ' ')}
        </span>
      </div>
    </div>
  );
};

export default function PostsPage() {
  const postMetadata = getPostMetadata('posts/academia', 'blockchain');

  return (
    <MainWrapper>
      <h3 className="font-press-start text-purple-400">✦ Blockchain ✦</h3>
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
