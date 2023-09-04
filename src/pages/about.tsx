import React from "react";
import Layout from "@theme/Layout";
import { AboutMe, AboutMeProps } from "../components/about/AboutMe";

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

export default function About(): JSX.Element {
  return (
    <Layout>
      <main className="container container--fluid margin-vert--lg">
        <AboutMe {...aboutMeData} />
      </main>
    </Layout>
  );
}
