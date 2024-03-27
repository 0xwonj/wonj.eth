import Link from 'next/link';

import MainWrapper from '@/components/MainWrapper';
import getPostMetadata from '@/components/getPostMetadata';

export const metadata = {
  title: 'Wonj ⋅ Blog',
  description: '',
};

const PostPreview = props => {
  return (
    <div className="flex flex-col gap-2">
      <span className="text-xs text-orange-300 font-press-start">
        {props.date}
      </span>
      <Link href={`/blog/${props.slug}`}>
        <h2 className="text-base text-white sm:text-lg md:text-xl hover:text-orange-300 duration-200 font-press-start">
          {props.title}
        </h2>
      </Link>
      &rarr; {props.subtitle}
    </div>
  );
};

export default function PostsPage() {
  const postMetadata = getPostMetadata('posts/blog');

  return (
    <MainWrapper>
      <h3 className="text-orange-400 font-press-start">✦ Blog ✦</h3>
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
