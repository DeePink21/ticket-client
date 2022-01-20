import React, { Component } from "react";
import AboutBanner from "./about/AboutBanner";
import AboutCounter from "./about/AboutCounter";
import AboutGallery from "./about/AboutGallery";
import AboutTour from "./about/AboutTour";
import Philosophy from "./about/Philosophy";
import SpeakerSingle from "./about/SpeakerSingle";

class About extends React.Component {
  render() {
    return (
      <div>
        <AboutBanner />
        <SpeakerSingle />
        <Philosophy />
        <AboutCounter />
        <AboutGallery />
        <AboutTour />
      </div>
    );
  }
}

export default About;
