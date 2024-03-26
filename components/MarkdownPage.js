// components/MarkdownPage.js
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Markdown from 'markdown-to-jsx';
import Link from 'next/link';
import MainWrapper from '@/components/MainWrapper';
import Comments from '@/components/Comments';

import { Press_Start_2P } from 'next/font/google';
const press = Press_Start_2P({ subsets: ['latin'], weight: ['400'] });

const purpleClasses = {
  50: 'text-purple-50',
  100: 'text-purple-100',
  200: 'text-purple-200',
  300: 'text-purple-300',
  400: 'text-purple-400',
  500: 'text-purple-500',
  'hover-700': 'hover:text-purple-700',
  'after-bg-500': 'after:bg-purple-500',
  'border-100': 'border-purple-100',
};

const pinkClasses = {
  50: 'text-pink-50',
  100: 'text-pink-100',
  200: 'text-pink-200',
  300: 'text-pink-300',
  400: 'text-pink-400',
  500: 'text-pink-500',
  'hover-700': 'hover:text-pink-700',
  'after-bg-500': 'after:bg-pink-500',
  'border-100': 'border-pink-100',
};

const blueClasses = {
  50: 'text-blue-50',
  100: 'text-blue-100',
  200: 'text-blue-200',
  300: 'text-blue-300',
  400: 'text-blue-400',
  500: 'text-blue-500',
  'hover-700': 'hover:text-blue-700',
  'after-bg-500': 'after:bg-blue-500',
  'border-100': 'border-blue-100',
};

const colorMappings = {
  purple: purpleClasses,
  pink: pinkClasses,
  blue: blueClasses,
};

const commonOverrides = {
  blockquote: ({ children }) => (
    <blockquote className="pl-4 border-l-4 border-gray-400 italic text-gray-500">
      {children}
    </blockquote>
  ),
};

const getMarkdownContent = (folder, slug) => {
  const filePath = path.join(process.cwd(), folder, `${slug}.md`);
  const content = fs.readFileSync(filePath, 'utf8');
  return matter(content);
};

const MarkdownPage = ({ folder, slug, backLink, titleColor }) => {
  const { content, data } = getMarkdownContent(folder, slug);

  const titleColorClasses = colorMappings[titleColor] || blueClasses;

  const markdownOptions = {
    overrides: {
      ...commonOverrides,
      h1: {
        component: ({ children }) => (
          <h1 className={`text-3xl ${titleColorClasses[500]} font-bold`}>
            {children}
          </h1>
        ),
      },
      h2: {
        component: ({ children }) => (
          <h2 className={`text-2xl ${titleColorClasses[400]} font-bold`}>
            {children}
          </h2>
        ),
      },
      h3: {
        component: ({ children }) => (
          <h3 className={`text-xl ${titleColorClasses[300]} font-bold`}>
            {children}
          </h3>
        ),
      },
      a: {
        component: ({ children, href }) => (
          <a
            href={href}
            className={`${titleColorClasses[500]} ${titleColorClasses['hover-700']}`}
          >
            {children}
          </a>
        ),
      },
      strong: {
        component: ({ children }) => (
          <strong className={`font-bold ${titleColorClasses[300]}`}>
            {children}
          </strong>
        ),
      },
      code: {
        component: ({ children }) => (
          <code
            className={`bg-gray-800 ${titleColorClasses[300]} px-2 py-1 rounded`}
          >
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
          href={backLink}
          className={`${titleColorClasses['after-bg-500']} text-blue-100 relative mr-auto overflow-hidden group hover:after:translate-x-full after:duration-200 after:absolute after:top-0 after:h-full after:w-full after:right-full after:z-[-1]`}
        >
          <p className="group-hover:text-[#030615] duration-200">&larr; Back</p>
        </Link>
        <div className="my-4">
          <h1
            className={`text-2xl ${titleColorClasses[100]} ` + press.className}
          >
            {data.title}
          </h1>
          <p className={`mt-2 ${titleColorClasses[50]}`}>{data.date}</p>
        </div>
        <article className="prose lg:prose-l text-blue-100">
          <Markdown options={markdownOptions}>{content}</Markdown>
        </article>
        <hr className={`my-8 border-t-2 ${titleColorClasses['border-100']}`} />
        <Comments />
      </div>
    </MainWrapper>
  );
};

export default MarkdownPage;
