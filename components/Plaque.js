import { Press_Start_2P } from 'next/font/google';
import Link from 'next/link';
import React from 'react';

const press = Press_Start_2P({ subsets: ['latin'], weight: ['400'] });

function PlanBenefits(props) {
  const { sm, benefits } = props;

  return (
    <ul
      className={
        'flex-col w-fit mx-auto gap-2 ' +
        (sm ? 'md:hidden flex' : 'hidden md:flex')
      }
    >
      {benefits.map((benefit, benefitIndex) => {
        return (
          <li key={benefitIndex} className="">
            {benefit}
          </li>
        );
      })}
    </ul>
  );
}

export default function Plaque(props) {
  const { name, price, benefits, link, message } = props;
  return (
    <div className="flex flex-col py-2 gap-8 bg-blue-400 text-blue-300 rounded-2xl">
      <div
        className={
          'grid grid-cols-1  gap-4 p-4 py-6 bg-slate-900 rounded-xl ' +
          (benefits ? ' md:grid-cols-2' : ' ')
        }
      >
        <div className="flex flex-col gap-4 justify-center">
          <h3 className={'text-xl text-center ' + press.className}>
            <span className="textGradient">✦ {name} ✦</span>
          </h3>
          <div className="flex items-end gap-2 justify-center">
            <h5 className={'text-base text-blue-200  ' + press.className}>$</h5>
            <h5
              className={
                'text-3xl sm:text-4xl text-blue-200  ' + press.className
              }
            >
              {price}
            </h5>
            <h5 className={'text-base text-blue-200  ' + press.className}></h5>
          </div>
          {benefits && <PlanBenefits sm benefits={benefits} />}
          <Link
            href={link}
            target=""
            className="mx-auto mt-2 duration-200 hover:opacity-70 px-4 py-2 rounded-md bg-blue-300 text-slate-900"
          >
            <h5 className={'text-sm  ' + press.className}>📝 Comments?</h5>
          </Link>
        </div>
        {benefits && <PlanBenefits benefits={benefits} />}
      </div>
    </div>
  );
}
