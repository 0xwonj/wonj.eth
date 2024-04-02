import Link from 'next/link';
import React from 'react';

import getPostMetadata from '@/components/getPostMetadata';
import MainWrapper from '@/components/MainWrapper';

export const metadata = {
  title: 'Wonj ⋅ Blog',
  description: '',
};

const PostPreview = props => {
  return (
    <div className="flex flex-col gap-2">
      <span className="font-press-start text-xs text-orange-300">
        {props.date}
      </span>
      <Link href={`/blog/${props.slug}`}>
        <h2 className="font-press-start text-base text-white duration-200 hover:text-orange-300 sm:text-lg md:text-xl">
          {props.title}
        </h2>
      </Link>
      &rarr; {props.subtitle}
    </div>
  );
};

export default function PostsPage() {
  const postMetadata = getPostMetadata('blog');

  return (
    <MainWrapper>
      <h3 className="font-press-start text-orange-400">✦ Blog ✦</h3>
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
