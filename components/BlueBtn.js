import React from 'react';

export default function BlueBtn(props) {
  const { btnText, noShadow, lg } = props;
  return (
    <div className="group relative my-2 w-fit rounded-lg p-[1.5px]">
      <div className={'blueBorder absolute inset-0 rounded-lg duration-500 '} />

      {!noShadow && (
        <div
          className={
            'blueBorder absolute -inset-2 rounded-lg opacity-20 blur-xl duration-500 '
          }
        />
      )}
      <p
        className={
          'bg-white whitespace-nowrap dark:bg-slate-950   z-1 group-hover:bg-transparent group-hover:text-white duration-200 relative rounded-lg ' +
          (lg ? 'px-4 py-2 ' : ' px-2 py-1 text-xs sm:text-sm')
        }
      >
        {btnText}
      </p>
    </div>
  );
}
