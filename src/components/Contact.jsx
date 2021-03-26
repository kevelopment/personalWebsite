import React from 'react';
import { Element } from 'react-scroll';
import contact from '../content/contact.json';
import BackgroundSvg from './background/BackgroundSvg';
import Routes from './nav/Routes';

const paths = [
  {
    path:
      'M 0.019 -0.027 C -192.728 41.561 280.436 183.751 948.756 41.298 C 1293.701 -32.227 2196.646 102.34 1919.956 -0.026',
    opacity: 1,
  },
  {
    path:
      'M -0.057 -0.001 C -202.728 75.185 240.55 178.125 1013.177 64.882 C 1288.468 24.533 2123.392 144.247 1919.962 -0.025',
    opacity: 0.5,
  },
  {
    path:
      'M 0.015 0.014 C -182.033 82.124 3.595 233.224 1026.749 98.959 C 1665.674 15.115 2050.605 197.504 1919.967 -0.033',
    opacity: 0.33,
  },
  {
    path:
      'M -0.031 -0.032 C -200.286 90.484 140.786 284.587 1040.972 119.851 C 1587.42 19.85 2134.842 220.51 1919.962 -0.025',
    opacity: 0.25,
  },
];

export default function Contact() {
  const { title, subtitle, buttonText } = contact;
  return (
    <Element name={Routes.CONTACT}>
      <section className="hero is-light is-medium gradient-primary-background-reverse">
        <BackgroundSvg height="200" elements={paths} />
        <div className="hero-body">
          <div className="container has-text-centered pb-6">
            <p className="title has-text-light">{title}</p>
            <div className="subtitle has-text-light">{subtitle}</div>
            <form action="mailto:info@kevelopment.dev" method="GET">
              <button
                className="button is-white is-outlined is-rounded"
                value=""
              >
                <span className="icon is-medium">
                  <i className="fa-lg far fa-paper-plane"></i>
                </span>
                <span>{buttonText}</span>
              </button>
            </form>
          </div>
        </div>
      </section>
    </Element>
  );
}
