import { StaticImage } from 'gatsby-plugin-image';
import React, { useEffect, useState } from 'react';
import { Bounce, Flip } from 'react-reveal';
import Typist from 'react-typist';

const imageSize = 160;
const borderRadius = 128;
const styles = {
  avatar: {
    flexShrink: 1,
    borderRadius: borderRadius,
    WebkitBorderRadius: borderRadius,
    display: 'inline-block',
    border: '8px solid rgba(33,104,105, 0.5)',
    maxHeight: imageSize,
    minHeight: imageSize,
    maxWidth: imageSize,
    minWidth: imageSize,
  },
  text: {
    paddingLeft: '1em',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
  },
};

export default function SplashScreen({ entries }) {
  const [tech, setTech] = useState(getRandomElement(entries));

  useEffect(() => {
    const interval = setInterval(() => {
      let randomElem = getRandomElement(entries);
      while (randomElem.label === tech.label) {
        randomElem = getRandomElement(entries);
      }
      setTech(randomElem);
    }, 2200);
    return () => clearInterval(interval);
  });

  const renderTextHighlighted = ({ label, logo }) => {
    return (
      <Flip bottom key={label}>
        <span>
          {logo}&nbsp;
          <Typist
            startDelay={400}
            className="has-text-primary inline-block"
            cursor={{ hideWhenDone: true, hideWhenDoneDelay: 0 }}
          >
            {label}
          </Typist>
        </span>
      </Flip>
    );
  };

  return (
    <Bounce left>
      <div className="container is-flex">
        <StaticImage
          aspectRatio={1}
          height={imageSize}
          width={imageSize}
          style={styles.avatar}
          imgStyle={{ borderRadius }}
          alt="Profile Picture"
          src="../../images/profile.jpg"
        />
        <div style={styles.text}>
          <p className="title is-size-1">
            Hi! I'm <span className="has-text-primary">Kevin</span>
          </p>
          <div className="subtitle is-size-4">
            the Web-Developer ready for your next {renderTextHighlighted(tech)}{' '}
            Project.
          </div>
        </div>
      </div>
    </Bounce>
  );
}

function getRandomElement(list) {
  return list[Math.floor(Math.random() * list.length)];
}