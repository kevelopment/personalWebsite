import React from "react";

// eslint-disable-next-line react/prop-types
export default function BackgroundSvg({ elements = [], height = 1080, width = 1920, primary = false }) {
  return (
    <svg viewBox={`0 0 ${width} ${height}`}>
      {elements.map(({ path, opacity }) => (
        <path
          key={`${JSON.stringify(path)} - ${opacity}`}
          className={`background-path ${primary ? "primary" : ""}`}
          style={{
            opacity,
          }}
          d={path}
        />
      ))}
    </svg>
  );
}
