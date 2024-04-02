import React from 'react';

import Comments from './Comments';

export default function GuestBook() {
  return (
    <>
      <div className="flex flex-col gap-6">
        <div className="flex flex-row gap-4">
          <h2 className="textGradientPink font-press-start text-3xl">
            Guest Book
          </h2>
        </div>
        <p className="text-pink-100">
          <span className="font-bold text-pink-300">
            Want to leave a note or just say hi?
          </span>
          <br />
          <br />
          Feel free to share your thoughts or greetings! 😊
        </p>
      </div>
      <Comments />
    </>
  );
}
