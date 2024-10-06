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
            src="/images/profile.png"
            alt="profile-img"
          />
        </div>
        <div className="flex flex-col gap-4 text-base sm:text-lg">
          <div className="flex flex-1 items-center gap-2 ">
            <div className="grid w-8 place-items-center">
              <i className="fa-solid fa-graduation-cap"></i>
            </div>
            M.S/Ph.D Student at SNU
          </div>
          <div className="flex flex-1 items-center gap-2 ">
            <div className="grid w-8 place-items-center">
              <i className="fa-solid fa-users"></i>
            </div>
            Blockchain Developer & Researcher
          </div>
          <div className="flex flex-1 items-center gap-2 ">
            <div className="grid w-8 place-items-center">
              <i className="fa-solid fa-lightbulb"></i>
            </div>
            Love blockchain and cryptography
          </div>
        </div>
      </div>
      <p className="leading-relaxed text-blue-100">
        Hi, I&apos;m Wonjae Choi, a passionate blockchain developer and
        researcher. I&apos;m currently pursuing my M.S/Ph.D degree at Seoul
        National University. I love the trustless and decentralized nature of
        blockchain and cryptography.
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
