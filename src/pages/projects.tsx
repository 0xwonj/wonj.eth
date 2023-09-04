import React from "react";
import Layout from "@theme/Layout";

import { Project, ProjectData } from "../components/projects/Project";

const assetsDir = "./assets/projects";
const projects: ProjectData[] = [
  {
    title: "XRPL Swap",
    description: "A decentralized exchange on the XRP Ledger. (WIP)",
    url: "https://xrplswap.xyz",
    image: require(`${assetsDir}/xrplswap.png`),
    role: "Maintainer",
  },
  {
    title: "Web3Mon",
    description: "The First and REAL NFT Multiverse Game.",
    url: "https://twitter.com/web3mon",
    image: require(`${assetsDir}/web3mon.png`),
    role: "Maintainer",
  },
];

const title = "Projects";
const description = "Featured projects I was/am involved in.";

export default function Projects(): JSX.Element {
  return (
    <Layout title={title} description={description}>
      <main className="container container--fluid margin-vert--lg">
        <h1>{title}</h1>
        <p>{description}</p>

        <div className="row">
          {projects.map((project) => (
            <Project key={project.title} {...project} />
          ))}
        </div>
      </main>
    </Layout>
  );
}
