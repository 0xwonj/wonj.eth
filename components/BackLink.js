import Link from 'next/link';
import React from 'react';

import { colorMappings } from '@/utils/colors';

export default function BackLink(props) {
  const { backLink, titleColor } = props;
  const titleColorClasses = colorMappings[titleColor] || colorMappings.blue;
  return (
    <Link
      href={backLink}
      className={`${titleColorClasses['after-bg-500']} group relative mr-auto overflow-hidden text-blue-100 after:absolute after:right-full after:top-0 after:z-[-1] after:size-full after:duration-200 hover:after:translate-x-full`}
    >
      <p className="font-press-start duration-200 group-hover:text-[#030615]">
        <i className="fa-solid fa-arrow-left text-xl"></i>
        <span className="ml-3 text-sm">Back</span>
      </p>
    </Link>
  );
}
