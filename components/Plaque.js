import Link from 'next/link';
import React from 'react';

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
  const { name, price, benefits, link } = props;
  return (
    <div className="flex flex-col gap-8 rounded-2xl bg-blue-400 py-2 text-blue-300">
      <div
        className={
          'grid grid-cols-1  gap-4 p-4 py-6 bg-slate-900 rounded-xl ' +
          (benefits ? ' md:grid-cols-2' : ' ')
        }
      >
        <div className="flex flex-col justify-center gap-4">
          <h3 className="text-center font-press-start text-xl">
            <span className="textGradient">✦ {name} ✦</span>
          </h3>
          <div className="flex items-end justify-center gap-2">
            <h5 className="font-press-start text-base  text-blue-200">$</h5>
            <h5 className="font-press-start text-3xl text-blue-200  sm:text-4xl">
              {price}
            </h5>
          </div>
          {benefits && <PlanBenefits sm benefits={benefits} />}
          <Link
            href={link}
            target=""
            className="mx-auto mt-2 rounded-md bg-blue-300 px-4 py-2 text-slate-900 duration-200 hover:opacity-70"
          >
            <h5 className="font-press-start  text-sm">📝 Comments?</h5>
          </Link>
        </div>
        {benefits && <PlanBenefits benefits={benefits} />}
      </div>
    </div>
  );
}
