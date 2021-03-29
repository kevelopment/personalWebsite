import { graphql, useStaticQuery } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { Fade } from "react-reveal";
import { Element } from "react-scroll";
import Routes from "./nav/Routes";

const roundBorders = {
  borderRadius: 6,
  WebkitBorderRadius: 6,
};
const maxHeight = 550;

const AboutMe = () => {
  const data = useStaticQuery(query);
  return (
    <Element name={Routes.ABOUTME}>
      <section className="hero is-light is-fullheight gradient-primary-background py-6">
        <div className="hero-body is-primary">
          <div className="container">
            <div className="columns">
              <Fade left>
                <div
                  className="column is-flex is-align-items-center"
                  style={roundBorders}
                >
                  <StaticImage
                    style={({ maxHeight: maxHeight }, roundBorders)}
                    className="elevation"
                    imgStyle={
                      ({
                        maxHeight,
                      },
                      roundBorders)
                    }
                    src={`../images/kevin.jpeg`}
                    alt="Me"
                  />
                </div>
              </Fade>
              <div className="column is-1"></div>
              <Fade right>
                <div className="column is-flex is-align-items-center">
                  <div
                    className="has-text-white has-text-left is-size-4"
                    dangerouslySetInnerHTML={{
                      __html: data.markdownRemark.html,
                    }}
                  ></div>
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </section>
    </Element>
  );
};
export default AboutMe;

const query = graphql`
  query {
    markdownRemark {
      html
    }
  }
`;