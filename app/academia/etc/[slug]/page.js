import fs from 'fs';
import Markdown from 'markdown-to-jsx';
import matter from 'gray-matter';
import getPostMetadata from '@/components/getPostMetadata';
import MainWrapper from '@/components/MainWrapper';
import Link from 'next/link';

import { Inter, Press_Start_2P, Space_Mono } from 'next/font/google';
const press = Press_Start_2P({ subsets: ['latin'], weight: ['400'] });

const getPostContent = slug => {
  const folder = 'docs/';
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync(file, 'utf8');
  const matterResult = matter(content);
  return matterResult;
};

export const generateStaticParams = async () => {
  const posts = getPostMetadata('docs', 'etc');
  return posts.map(post => ({
    slug: post.slug,
  }));
};

export async function generateMetadata({ params, searchParams }, parent) {
  // read route params
  const id = params?.slug ? ' ⋅ ' + params?.slug : '';

  return {
    title: `Wonj ⋅ Etc${id.replaceAll('_', ' ')}`,
  };
}

const PostPage = props => {
  const slug = props.params.slug;
  const post = getPostContent(slug);

  const markdownOptions = {
    overrides: {
      h1: {
        component: ({ children }) => (
          <h1 className="text-3xl text-purple-500 font-bold">{children}</h1>
        ),
      },
      h2: {
        component: ({ children }) => (
          <h2 className="text-2xl text-purple-400 font-bold">{children}</h2>
        ),
      },
      h3: {
        component: ({ children }) => (
          <h3 className="text-xl text-purple-300 font-bold">{children}</h3>
        ),
      },
      a: {
        component: ({ children, href }) => (
          <a href={href} className="text-purple-500 hover:text-purple-700">
            {children}
          </a>
        ),
      },
      strong: {
        component: ({ children }) => (
          <strong className="font-bold text-purple-300">{children}</strong>
        ),
      },
      code: {
        component: ({ children }) => (
          <code className="bg-gray-800 text-purple-300 px-2 py-1 rounded">
            {children}
          </code>
        ),
      },
      blockquote: {
        component: ({ children }) => (
          <blockquote className="pl-4 border-l-4 border-gray-400 italic text-gray-500">
            {children}
          </blockquote>
        ),
      },
    },
  };

  return (
    <MainWrapper>
      <div className="flex flex-col">
        <Link
          href={'/academia/etc/'}
          className="relative mr-auto overflow-hidden group hover:after:translate-x-full after:duration-200 after:absolute after:top-0 after:h-full after:w-full after:right-full after:bg-purple-500 after:z-[-1]"
        >
          <p className="group-hover:text-[#030615] duration-200">&larr; Back</p>
        </Link>
        <div className="my-12">
          <h1 className={'text-2xl text-purple-100 ' + press.className}>
            {post.data.title}
          </h1>
          <p className="mt-2 text-purple-50">{post.data.date}</p>
        </div>

        <article className="prose lg:prose-l text-blue-100">
          <Markdown options={markdownOptions}>{post.content}</Markdown>
        </article>
      </div>
    </MainWrapper>
  );
};

export default PostPage;
