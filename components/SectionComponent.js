import React from 'react';

const SectionComponent = ({ items, renderLink }) => {
  return (
    <section className="flex flex-col gap-10">
      {items.map((item, index) => (
        <div key={index} className="flex flex-col gap-2">
          <h3 className="text-bold text-xl text-blue-300">
            {item.institution}
            {item.location ? `, ${item.location}` : ''} <br /> {item.title}
          </h3>
          <p className="text-blue-200">{item.timeframe}</p>
          <ul>
            {item.details.map((detail, detailIndex) => (
              <li key={detailIndex} className="my-2 text-blue-100">
                - {detail}
              </li>
            ))}
          </ul>
          <div className="mt-2 flex flex-row flex-wrap gap-4">
            {renderLink(item)}
          </div>
        </div>
      ))}
    </section>
  );
};

export default SectionComponent;
