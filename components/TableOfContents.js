import React, { useEffect, useState } from 'react';

const TableOfContents = ({ headings }) => {
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '0% 0% -80% 0%' }
    );

    headings.forEach(heading => {
      const element = document.getElementById(heading.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [headings]);

  return (
    <nav className="fixed top-20 right-5 w-48">
      <ul className="flex flex-col">
        {headings.map(heading => (
          <li
            key={heading.id}
            className={`py-1 ${activeId === heading.id ? 'text-purple-500 font-semibold' : ''}`}
          >
            <a
              href={`#${heading.id}`}
              className="hover:text-purple-600 transition-colors duration-300"
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default TableOfContents;
