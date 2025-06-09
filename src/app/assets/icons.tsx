import React from 'react';

export const ReactIcon = ({ width = 24, height = 40 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 841.9 595.3" width={width} height={height} fill="none">
    <g fill="none" stroke="#61DAFB" strokeWidth="40">
      <ellipse cx="420.9" cy="296.5" rx="45.7" ry="45.7" fill="#61DAFB" />
      <path d="M520.5 78.1c-39.6 0-79.5 9.6-117.2 27.7-37.7-18-77.6-27.7-117.2-27.7-97.8 0-177.4 79.5-177.4 177.4 0 39.6 9.6 79.5 27.7 117.2-18 37.7-27.7 77.6-27.7 117.2 0 97.8 79.5 177.4 177.4 177.4 39.6 0 79.5-9.6 117.2-27.7 37.7 18 77.6 27.7 117.2 27.7 97.8 0 177.4-79.5 177.4-177.4 0-39.6-9.6-79.5-27.7-117.2 18-37.7 27.7-77.6 27.7-117.2 0-97.8-79.5-177.4-177.4-177.4z" />
    </g>
  </svg>
);

export const TailwindIcon = ({ width = 24, height = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 154" width={width} height={height} fill="none">
    <path
      fill="#38BDF8"
      d="M128 0C96 0 80 17.1 80 51.4c8-11.4 17.1-15.2 27.4-11.4 5.9 2.1 10.1 7.1 15 13.2 8 10.1 17.1 21.4 35.6 21.4 31.9 0 47.9-17.1 47.9-51.4-8 11.4-17.1 15.2-27.4 11.4-5.9-2.1-10.1-7.1-15-13.2-8-10.1-17.1-21.4-35.6-21.4zM80 77.2C48 77.2 32 94.3 32 128.6c8-11.4 17.1-15.2 27.4-11.4 5.9 2.1 10.1 7.1 15 13.2 8 10.1 17.1 21.4 35.6 21.4 31.9 0 47.9-17.1 47.9-51.4-8 11.4-17.1 15.2-27.4 11.4-5.9-2.1-10.1-7.1-15-13.2-8-10.1-17.1-21.4-35.6-21.4z"
    />
  </svg>
);

export const TanStackQueryIcon = ({ width = 24, height = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width={width} height={height} fill="none">
    <rect width="256" height="256" fill="black" rx="60" />
    <path d="M66 66h124v124H66z" fill="#FF4154" transform="rotate(45 128 128)" />
    <text
      x="50%"
      y="55%"
      textAnchor="middle"
      fill="white"
      fontSize="40"
      fontWeight="bold"
      fontFamily="sans-serif"
      dy=".3em"
    >
      Q
    </text>
  </svg>
);

export const NextJSIcon = ({ width = 40, height = 40 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width={width} height={height} fill="none">
    <rect width="256" height="256" fill="black" />
    <path d="M120 40l104 176" stroke="white" strokeWidth="16" />
    <path fill="white" d="M92 96h12v64H92zM144 96h12v64h-12z" />
  </svg>
);
