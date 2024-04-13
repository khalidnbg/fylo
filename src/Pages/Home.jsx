import React, { Fragment } from "react";
import Landing from "../Components/Landing";
import Features from "../Components/Features";
import StayProductive from "../Components/StayProductive";
import Testimonials from "../Components/Testimonials";
import GetStarted from "../Components/GetStarted";

function Home() {
  // we use fragment cuz we return more then one element
  return (
    <Fragment>
      <Landing />
      <Features />
      <StayProductive />
      <Testimonials />
      <GetStarted />
    </Fragment>
  );
}

export default Home;
