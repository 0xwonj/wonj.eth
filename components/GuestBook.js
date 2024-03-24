import Link from 'next/link';
import React, { useState } from 'react';
import BlueBtn from './BlueBtn';
import { Press_Start_2P } from 'next/font/google';

const press = Press_Start_2P({ subsets: ['latin'], weight: ['400'] });

export default function GuestBook() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [isPublic, setIsPublic] = useState(true);
  const [submission, setSubmission] = useState(null);

  async function handleSubmitForm() {
    if (submission || !message) {
      return;
    }
    setSubmission('sending');
    try {
      const url = '/api/feedback';
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message, name, isPublic }),
      };
      const res = await fetch(url, options);
      if (res.ok) {
        setSubmission('sent');
        setName('');
        setMessage('');
        setIsPublic(true);
      } else {
        setSubmission(null);
      }
    } catch (err) {
      console.error('Failed to submit message', err.message);
      setSubmission(null);
    }
  }

  return (
    <>
      <div className="flex flex-col gap-6">
        <h2 className={`text-3xl textGradient ${press.className}`}>
          Guest Book 📖
        </h2>
        <p className="text-blue-300">
          <span className="text-blue-200 font-bold">
            Want to leave a note or just say hi?
          </span>
          <br />
          <br />
          Feel free to share your thoughts or greetings! 📝
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <div className="grid grid-cols-1 gap-4">
          <input
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="Name"
            className="resize-none bg-transparent border border-solid border-blue-900 p-2 rounded-xl focus:border-blue-700 duration-200 outline-none"
          />
        </div>
        <textarea
          value={message}
          onChange={e => setMessage(e.target.value)}
          placeholder="Your message here..."
          className="resize-none bg-transparent border border-solid border-blue-900 p-2 rounded-xl focus:border-blue-700 duration-200 outline-none min-h-[140px]"
        ></textarea>
        <label className="inline-flex items-center">
          <input
            type="checkbox"
            className="form-checkbox h-5 w-5 text-blue-600"
            checked={isPublic}
            onChange={e => setIsPublic(e.target.checked)}
          />
          <span className="ml-2 text-gray-700">Public</span>
        </label>
      </div>

      <button onClick={handleSubmitForm} className="flex flex-col mr-auto">
        <BlueBtn
          btnText={
            !submission
              ? 'Submit ⭐️'
              : submission === 'sending'
                ? 'Sending...'
                : 'Sent ✅'
          }
          lg
          noShadow
        />
      </button>
    </>
  );
}
