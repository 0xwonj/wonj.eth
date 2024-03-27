import SectionComponent from './SectionComponent';

const AboutSections = ({
  educationData,
  workingExperienceData,
  extracurricularActivitiesData,
}) => {
  const renderLinks = item => (
    <>
      {item.links?.website && (
        <a
          href={item.links.website}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-blue-400 duration-200"
        >
          <div>
            <i className="fa-solid fa-globe text-xl"></i>
          </div>
        </a>
      )}
      {item.links?.github && (
        <a
          href={item.links.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-blue-400 duration-200"
        >
          <div>
            <i className="fa-brands fa-github text-xl"></i>
          </div>
        </a>
      )}
      {item.links?.twitter && (
        <a
          href={item.twitter}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-blue-400 duration-200"
        >
          <div>
            <i className="fa-brands fa-twitter text-xl"></i>
          </div>
        </a>
      )}
      {item.links?.link && (
        <a
          href={item.links.link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-blue-400 duration-200"
        >
          <div>
            <i className="fa-solid fa-link text-xl"></i>
          </div>
        </a>
      )}
    </>
  );

  return (
    <div>
      <h2 className="text-2xl text-blue-500 font-press-start mt-6 mb-8">
        ✦ Education ✦
      </h2>
      <SectionComponent items={educationData} renderLink={renderLinks} />
      <h2 className="text-2xl text-blue-500 font-press-start mt-12 mb-8">
        ✦ Working Experience ✦
      </h2>
      <SectionComponent
        items={workingExperienceData}
        renderLink={renderLinks}
      />
      <h2 className="text-xl text-blue-500 font-press-start mt-12 mb-8">
        ✦ Extracurricular Activities ✦
      </h2>
      <SectionComponent
        items={extracurricularActivitiesData}
        renderLink={renderLinks}
      />
    </div>
  );
};

export default AboutSections;
