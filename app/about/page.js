import Image from 'next/image';
import React from 'react';

import AboutSections from '@/components/AboutSections';
import MainWrapper from '@/components/MainWrapper';
import educationData from '@/data/about/education.json';
import extracurricularActivitiesData from '@/data/about/extracurricularActivities.json';
import workingExperienceData from '@/data/about/workingExperience.json';

export const metadata = {
  title: 'Wonj ⋅ About',
  description: 'Blockchain Developer & Researcher at SNU VMO Lab and Decipher',
};

export default function AboutPage() {
  return (
    <MainWrapper>
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-center sm:justify-start">
          <h2 className="textGradient font-press-start text-3xl">
            Wonjae Choi
          </h2>
        </div>
      </div>
      <div className="flex flex-col gap-6 text-blue-300 sm:flex-row">
        <div className="flex items-center justify-center sm:justify-start">
          <Image
            className="rounded-full"
            height={200}
            width={200}
            src="/images/profile.jpg"
            alt="profile-img"
          />
        </div>
        <div className="flex flex-col gap-4 text-base sm:text-lg">
          <div className="flex flex-1 items-center gap-2 ">
            <div className="grid w-8 place-items-center">
              <i className="fa-solid fa-graduation-cap"></i>
            </div>
            Blockchain Researcher at SNU
          </div>
          <div className="flex flex-1 items-center gap-2 ">
            <div className="grid w-8 place-items-center">
              <i className="fa-solid fa-users"></i>
            </div>
            Member of Decipher
          </div>
          <div className="flex flex-1 items-center gap-2 ">
            <div className="grid w-8 place-items-center">
              <i className="fa-solid fa-lightbulb"></i>
            </div>
            Building in Stealth Mode ..
          </div>
        </div>
      </div>
      <p className="leading-relaxed text-blue-100">
        Hi, I&apos;m Wonjae Choi, a passionate blockchain developer and
        researcher. I&apos;m currently studying and developing blockchain
        focusing on the scalability and security of blockchain. I&apos;m also
        building something in stealth mode.
      </p>
      <hr className="border-t-2 border-blue-200" />
      <AboutSections
        educationData={educationData}
        workingExperienceData={workingExperienceData}
        extracurricularActivitiesData={extracurricularActivitiesData}
      />
    </MainWrapper>
  );
}
