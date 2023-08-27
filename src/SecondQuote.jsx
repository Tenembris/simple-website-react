import Plx from "react-plx";

const SecondQuote = () => {
  const fadeInOutData = [
    {
      start: 1500, // Starts fading in when the component is 200px from the top
      end: 2200, // Ends fading in when the component is 500px from the top
      properties: [
        {
          startValue: 0,
          endValue: 0.3,
          property: "opacity",
        },
      ],
    },
    {
      start: 2250, // Starts fading out when the component is 600px from the top
      end: 2800, // Ends fading out when the component is 800px from the top
      properties: [
        {
          startValue: 0.3,
          endValue: 1,
          property: "opacity",
        },
      ],
    },
  ];

  return (
    <div className="MyAwesomeParallax">
      <Plx parallaxData={fadeInOutData}>
        <h1>“The mark of a true hero is humility" - Shifu ”</h1>
      </Plx>
    </div>
  );
};

export default SecondQuote;
