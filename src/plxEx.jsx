import React from "react";
import Plx from "react-plx";

const MyComponent = () => {
  const fadeInOutData = [
    {
      start: 200, // Starts fading in when the component is 200px from the top
      end: 1700, // Ends fading in when the component is 500px from the top
      properties: [
        {
          startValue: 0,
          endValue: 1,
          property: "opacity",
        },
      ],
    },
    {
      start: 1700, // Starts fading out when the component is 600px from the top
      end: 1800, // Ends fading out when the component is 800px from the top
      properties: [
        {
          startValue: 1,
          endValue: 0,
          property: "opacity",
        },
      ],
    },
  ];

  return (
    <div className="MyAwesomeParallax">
      <Plx parallaxData={fadeInOutData}>
        <div className="content">
          <h1>
            “Yesterday is history, tomorrow is a mystery, but today is a gift.
            That is why it is called present.”
          </h1>
          <p>— “Kung Fu Panda”</p>
        </div>
      </Plx>
    </div>
  );
};

export default MyComponent;
