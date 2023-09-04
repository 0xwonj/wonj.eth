import React from "react";
import Layout from "@theme/Layout";

import Talk, { TalkMetadata } from "../components/talks/Talk";

import XrplDevMeetup from "./assets/talks/_xrpl-dev-meetup.md";
import BlockchainAtYonsei from "./assets/talks/_blockchain-at-yonsei.md";
import HyperledgerFabricDataNFT from "./assets/talks/_hyperledger-fabric-project.md";

const talks: TalkMetadata[] = [
  {
    title: "XRP Ledger Developer Meetup Session",
    description: <XrplDevMeetup />,
    events: [
      {
        name: "Yonsei University",
        location: "Seoul, Korea",
        date: new Date(2023, 7, 27),
      },
    ],
    recordingURL: "https://www.youtube.com/watch?v=QkDLNzBN2EY",
    slidesURL: "",
  },
  {
    title: "Blockchain at Yonsei Regular Session",
    description: <BlockchainAtYonsei />,
    events: [
      {
        name: "Yonsei University",
        location: "Seoul, Korea",
        date: new Date(2023, 3, 30),
      },
      {
        name: "Yonsei University",
        location: "Seoul, Korea",
        date: new Date(2023, 4, 27),
      },
      {
        name: "Yonsei University",
        location: "Seoul, Korea",
        date: new Date(2023, 5, 11),
      },
    ],
    recordingURL: "https://www.youtube.com/watch?v=QkDLNzBN2EY",
    slidesURL: "",
  },
  {
    title: "Hyperledger Fabric Data NFT project",
    description: <HyperledgerFabricDataNFT />,
    events: [
      {
        name: "Yonsei University",
        location: "Seoul, Korea",
        date: new Date(2023, 6, 21),
      },
    ],
    recordingURL: "https://www.youtube.com/watch?v=wCQcgOkEXH0&t=1s",
  },
];

const title = "Talks";
const description = "Featured talks I presented on various events.";

export default function Talks(): JSX.Element {
  return (
    <Layout title={title} description={description}>
      <main className="container container--fluid margin-vert--lg">
        <h1>{title}</h1>
        <p>{description}</p>

        <div className="row">
          {talks.map((talkData) => (
            <Talk key={talkData.title} {...talkData} />
          ))}
        </div>
      </main>
    </Layout>
  );
}
