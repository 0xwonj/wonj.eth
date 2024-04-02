import Link from 'next/link';
import React from 'react';

import { colorMappings } from '@/utils/colors';

export default function LinkSection(props) {
  const { title, array, color, children } = props;
  const colorClasses = colorMappings[color] || colorMappings.blue;

  return (
    <section className="grid grid-cols-1 flex-col gap-4 md:grid-cols-2">
      <h3 className={`${colorClasses[400]} font-press-start md:col-span-2`}>
        ✦ {title} ✦
      </h3>
      {array &&
        array.map((link, linkIndex) => {
          const textSizeClass =
            link.name.length >= 12 ? 'text-sm' : 'text-base';
          return (
            <Link
              href={link.link}
              target={link.target}
              key={linkIndex}
              className={`${color}BtnBorder relative grid place-items-center rounded-lg ${colorClasses['button-bg']} ${colorClasses['hover-bg-950']} p-4 text-blue-100 ${colorClasses['hover-200']}`}
            >
              <i
                className={`absolute left-4 top-1/2 -translate-y-1/2 text-xl ${
                  linkIndex < 4 && title === 'Links' ? 'specialShadow' : ''
                } ${link.icon}`}
              ></i>
              <p
                className={`${textSizeClass} ${
                  [].includes(link.name) ? 'specialShadow' : ''
                } font-press-start`}
              >
                {link.name}
              </p>
            </Link>
          );
        })}
      {children}
    </section>
  );
}
