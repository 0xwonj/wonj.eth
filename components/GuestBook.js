import Comments from '@/components/Comments';

export default function GuestBook() {
  return (
    <>
      <div className="flex flex-col gap-6">
        <div className="flex flex-row gap-4">
          <h2 className="text-3xl textGradient font-press-start">Guest Book</h2>
          <span className="text-4xl">📖</span>
        </div>
        <p className="text-blue-300">
          <span className="text-blue-200 font-bold">
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
