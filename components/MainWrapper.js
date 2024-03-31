import React from 'react';

export default function MainWrapper(props) {
  const { children } = props;
  return (
    <main className="flex flex-1 flex-col justify-center gap-14 py-10">
      {children}
    </main>
  );
}
