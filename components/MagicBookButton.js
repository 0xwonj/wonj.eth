import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function MagicBookButton(props) {
  const { href, title, description = '' } = props;
  return (
    <div>
      <h3 className="mb-4 font-press-start text-pink-400">✦ {title} ✦</h3>
      <div className="flex flex-col items-center justify-center rounded-lg border-8 border-pink-400 bg-[#14020f] p-4 text-pink-300 hover:border-pink-500 hover:bg-[#25041c] hover:text-pink-500">
        <Link href={href}>
          <Image
            src="/images/magic-book.png"
            alt="magic book"
            width={600}
            height={600}
            sizes="(max-width: 768px) 100vw, 600px"
          />
          <p className="text-center font-press-start text-sm text-pink-300">
            {description}
          </p>
        </Link>
      </div>
    </div>
  );
}
