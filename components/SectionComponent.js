import React from 'react';

const SectionComponent = ({ items, renderLink }) => {
  return (
    <section className="flex flex-col gap-10">
      {items.map((item, index) => (
        <div key={index} className="flex flex-col gap-2">
          <h3 className="text-xl text-blue-300">
            {item.institution}
            {item.location ? `, ${item.location}` : ''} <br /> {item.title}
          </h3>
          <p className="text-blue-200">{item.timeframe}</p>
          <ul>
            {item.details.map((detail, detailIndex) => (
              <li key={detailIndex} className="text-blue-100 my-2">
                - {detail}
              </li>
            ))}
          </ul>
          <div className="flex flex-row flex-wrap gap-4 mt-2">
            {renderLink(item)}
          </div>
        </div>
      ))}
    </section>
  );
};

export default SectionComponent;
