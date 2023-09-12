import React from "react";
import Layout from "@theme/Layout";
import { AboutMe, AboutMeProps } from "../components/about/AboutMe";
import Experience, { ExperienceProps } from "../components/about/Experience";
import Honor, { HonorProps } from "../components/about/Honor";

const aboutMeData: AboutMeProps = {
  avatar: require("./assets/about/me.jpeg"),
  descriptionComponent: (
    <div>
      <p>
        Hi, I'm Wonjae Choi, a passionate Blockchain Developer and a student at
        Yonsei University majoring in computer science.
      </p>
      <p>
        I am currently active as a blockchain researcher and developer,
        affiliated with Decipher, the blockchain society at Seoul National
        University.
      </p>
      <p>
        I've been involved in various projects such as XRPL Swap, Web3Mon, and
        many more.
      </p>
      <p>
        When I'm not coding, you can find me reading about new technologies, or
        sleeping in my bed 💤.
      </p>
    </div>
  ),
};

const experienceData: ExperienceProps[] = [
  {
    position: "Co-founder & Lead Engineer",
    company: "XRPL Swap (DEX Project on XRP Ledger)",
    duration: "Aug. 2023 - Present",
    description: (
      <div>
        <ul>
          <li>
            Lead Engineer on Decentralized Exchange Platform at XRP Ledger.
          </li>
          <li>
            Architected and designed core concepts, including novel tokenomics
            for the DEX.
          </li>
          <li>
            Represented XRPL Swap at the KBW side event "XRP Ledger XCESS",
            pitching the project.
          </li>
          <li>
            Secured 1st prize at the Ripple Hackathon for implementing
            concentrated liquidity using xrpl hooks.
          </li>
        </ul>
      </div>
    ),
  },
  {
    position: "Developer Relations, XRP Ledger Korea",
    company: "Catalyze-Research",
    duration: "Jul. 2023 - Sep. 2023",
    description: (
      <div>
        <ul>
          <li>
            Curated and formulated a comprehensive developer curriculum and
            documentation tailored for Korean XRP Ledger developers.
          </li>
          <li>
            Anchored the developer session at the XRP Ledger developer meetup.
          </li>
          <li>
            Provided technical support for businesses seeking to incorporate XRP
            Ledger into their services.
          </li>
        </ul>
      </div>
    ),
  },
  {
    position: "Contract & Backend Developer",
    company: "Web3Mon (Web3 Initiative)",
    duration: "Feb. 2023 - Apr. 2023",
    description: (
      <div>
        <ul>
          <li>
            Crafted and deployed smart contracts using Rust for the Solana
            blockchain.
          </li>
          <li>
            Maintained backend server and conducted research on optimizing
            virtual state channels.
          </li>
        </ul>
      </div>
    ),
  },
  {
    position: "Quantitative Developer",
    company: "Contract in Person",
    duration: "Oct. 2021 - Jul. 2023",
    description: (
      <div>
        <ul>
          <li>
            Algorithmic Trading:
            <ul>
              <li>
                Conceptualized, designed, and instituted trading algorithms
                leveraging technical analysis and machine learning
                methodologies.
              </li>
              <li>
                Performed continuous monitoring and fine-tuning of trading bots,
                adapting to market dynamics.
              </li>
            </ul>
          </li>
          <li>
            DEX Arbitrage:
            <ul>
              <li>
                Conducted research on various MEVs, leading to enhanced
                arbitrage strategies.
              </li>
              <li>Developed a cross-DEX arbitrage bot.</li>
            </ul>
          </li>
          <li>Managed \$400k+ in client assets.</li>
        </ul>
      </div>
    ),
  },
  {
    position: "Member",
    company: "Decipher, Seoul National University",
    duration: "Aug. 2023 - Present",
    description: (
      <div>
        <ul>
          <li>
            Joined as a member of Decipher, a blockchain society at Seoul
            National University.
          </li>
          <li>
            Actively engaging in advanced blockchain research and solutions
            development.
          </li>
        </ul>
      </div>
    ),
  },
  {
    position: "Developers Lead & Board Member & Project Manager",
    company: "Blockchain at Yonsei, Yonsei University",
    duration: "Sep. 2022 - Aug. 2023",
    description: (
      <div>
        <ul>
          <li>
            Completed two semester activity of Blockchain at Yonsei, a
            blockchain society based on Yonsei University.
          </li>
          <li>
            Drove research initiatives on emerging topics in blockchain and web3
            technologies.
          </li>
          <li>
            Delivered in-depth lectures on Solidity smart contracts and MEV for
            6 weeks, as a Developers Lead.
          </li>
          <li>
            Structured the semester curriculum and presented three blockchain
            sessions for the regular session as a Board Member.
          </li>
          <li>
            Conceptualized, designed, and executed a DEX arbitrage bot
            leveraging Solidity and Node.js, enhancing trading efficiencies as
            Project Manager.
          </li>
        </ul>
      </div>
    ),
  },
  {
    position: "Member",
    company: "Morgorithm, Yonsei University",
    duration: "Mar. 2020 - Mar. 2022",
    description: (
      <div>
        <ul>
          <li>
            Delved deep into algorithmic challenges, honing problem-solving and
            coding skills.
          </li>
          <li>
            Participated Morgorithm algorithm camp, studied various in-depth
            algorithms.
          </li>
          <li>Participated in ICPC Sinchon, an algorithm competition.</li>
        </ul>
      </div>
    ),
  },
];

const honorData: HonorProps[] = [
  {
    title: "Winner (1st Place)",
    issuer: "XRPL Summer Hackathon | Ripple",
    date: "2023",
    description: (
      <p>
        Secured 1st prize at the Ripple Hackathon for implementing concentrated
        liquidity using xrpl hooks.
      </p>
    ),
  },
  {
    title: "Polygon prize",
    issuer: "Ethereum Global Tokyo Hackathon",
    date: "2023",
    description: (
      <p>Received the Polygon prize at the Ethereum Global Tokyo Hackathon.</p>
    ),
  },
  {
    title: "1st Place",
    issuer: "Yonsei Computer Science Graduation Project Exhibition",
    date: "2023",
    description: (
      <p>
        Secured the top position at the Yonsei Computer Science Graduation
        Project Exhibition.
      </p>
    ),
  },
];

export default function About(): JSX.Element {
  return (
    <Layout>
      <main className="container container--fluid margin-vert--lg">
        <AboutMe {...aboutMeData} />
        <section>
          <h2 className="section-title">Experience</h2>
          {experienceData.map((data, idx) => (
            <Experience key={idx} {...data} />
          ))}
        </section>
        <section>
          <h2 className="section-title">Honor & Awards</h2>
          {honorData.map((data, idx) => (
            <Honor key={idx} {...data} />
          ))}
        </section>
      </main>
    </Layout>
  );
}
