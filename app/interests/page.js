import MainWrapper from "@/components/MainWrapper";
import React from "react";

import { Inter, Press_Start_2P, Roboto_Mono } from "next/font/google";
const space = Roboto_Mono({ subsets: ["latin"], weight: ["400", "700"] });
// const inter = Inter({ subsets: ["latin"] });
const press = Press_Start_2P({ subsets: ["latin"], weight: ["400"] });

export const metadata = {
  title: "Wonj ⋅ Interests",
  description: "",
};

export default function ExperiencePage() {
  return <MainWrapper>Will be updated soon ...</MainWrapper>;
}
