import React from 'react';

import getPostMetadata from '@/components/getPostMetadata';
import MarkdownPage from '@/components/MarkdownPage';

export const generateStaticParams = async () => {
  const posts = getPostMetadata('blog');
  return posts.map(post => ({
    slug: post.slug,
  }));
};

export async function generateMetadata({ params }) {
  const id = params?.slug ? ' ⋅ ' + params?.slug : '';
  return {
    title: `Wonj ⋅ Blog${id.replaceAll('_', ' ')}`,
  };
}

const PostPage = props => {
  const slug = props.params.slug;
  const folder = 'blog';
  const backLink = '/blog/';
  const titleColor = 'orange';

  return (
    <MarkdownPage
      folder={folder}
      slug={slug}
      backLink={backLink}
      titleColor={titleColor}
    />
  );
};

export default PostPage;
