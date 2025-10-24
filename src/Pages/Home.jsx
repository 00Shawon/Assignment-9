import React, { Suspense } from "react";
import Header from "../Component/Header";
import Skills from "../Component/Home/Skills";
import TopProvider from "../Component/Home/TopProvider";
import HowItWorks from "../Component/Home/HowItWorks";
import { RiseLoader } from "react-spinners";
import ExtraRevelantSection from "../Component/ExtraRevelantSection";

const Home = () => {
  return (
    <div className="w-11/12 mx-auto">
      <Header></Header>
      <div className="">
        <Suspense fallback={<RiseLoader />}>
          <Skills></Skills>
        </Suspense>
      </div>

      <TopProvider></TopProvider>
      <HowItWorks></HowItWorks>
      <ExtraRevelantSection></ExtraRevelantSection>
    </div>
  );
};

export default Home;
