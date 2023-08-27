import React from "react";
import Plx from "react-plx";
// Załóżmy, że style CSS są w pliku Heroes.css
const parallaxData = (propertyXStart, propertyXEnd) => [
  {
    start: 1800,
    duration: 3500,
    easing: "ease-in",
    properties: [
      {
        startValue: propertyXStart,
        endValue: propertyXEnd,
        property: "translateX",
      },
      {
        startValue: 1,
        endValue: 1.2,
        property: "scale",
      },
    ],
  },
];

const Heroes = () => {
  const BG_parallax = [
    {
      start: 2600,
      duration: 400,
      easing: "ease-in",
      properties: [
        {
          startValue: 1,
          endValue: 1,
          property: "scale",
        },
      ],
    },
  ];

  const H1_parallax = [
    {
      start: 0,
      end: 3000,
      properties: [
        {
          startValue: 0,
          endValue: 0,
          property: "opacity",
        },
      ],
    },
    {
      start: 3200,
      duration: 100,
      easing: "ease-in",
      properties: [
        {
          startValue: 1,
          endValue: 1.15,
          property: "scale",
        },
        {
          startValue: 0,
          endValue: 1,
          property: "opacity",
        },
      ],
    },
  ];
  const parallaxDataRight = parallaxData(100, 3000);
  const parallaxDataLeft = parallaxData(-700, -6500);

  return (
    <div className="heroes-bg">
      <Plx className="foreground" parallaxData={parallaxDataRight}>
        <img
          className="foreground-right"
          src="src/assets/purple-bush.png"
          alt=""
        />
      </Plx>
      <Plx className="foreground" parallaxData={parallaxDataLeft}>
        <img
          className="foreground-left"
          src="src/assets/purple-bush.png"
          alt=""
        />
      </Plx>

      <Plx parallaxData={BG_parallax}>
        <div className="centered-image-container">
          <img src="src/assets/heroes-bg.png" alt="" />
          <Plx parallaxData={H1_parallax}>
            <h1>hero</h1>
          </Plx>
        </div>
      </Plx>
    </div>
  );
};

export default Heroes;
