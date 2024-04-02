import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function MagicBookButton(props) {
  const { href, title, description = '' } = props;
  return (
    <div className="mt-10 flex flex-col items-center justify-center rounded-lg border-8 border-pink-400 bg-[#14020f] p-4 text-pink-300 hover:text-pink-500">
      <Link href={href}>
        <h3 className="my-2 text-center font-press-start text-lg">
          ✦ {title} ✦
        </h3>
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
  );
}
