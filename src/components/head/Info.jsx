import React from "react";
import { Element } from "react-scroll";
import svgData from "../../content/info.json";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import BackgroundSvg from "../background/BackgroundSvg";
import Navbar from "../nav/Navbar";
import Routes from "../nav/Routes";
import logos from "./logos";
import SplashScreen from "./SplashScreen";

export default function Info() {
  const { width } = useWindowDimensions();
  const { bottom, top } = svgData;

  return (
    <Element name={Routes.INFO}>
      <section className="hero is-fullheight is-light gradient-light-background">
        <section className="hero gradient-primary-background">
          <BackgroundSvg elements={top} height="200" />
        </section>

        <div className="hero-head">
          <Navbar />
        </div>

        <div className="hero-body absolutely-centered">
          <SplashScreen entries={logos} breakText={width < 700} />
        </div>

        <section className="hero is-light gradient-primary-background">
          <BackgroundSvg elements={bottom} height="200" />
        </section>
      </section>
    </Element>
  );
}
