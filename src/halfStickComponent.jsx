import Atropos from "atropos/react";
import Plx from "react-plx";

const createFadeInOutData = (offset, propertyY) => [
  {
    start: 0, // Starts fading in when the component is 200px from the top
    end: 1600, // Ends fading in when the component is 500px from the top
    properties: [
      {
        startValue: offset,
        endValue: 0,
        property: propertyY,
      },
      {
        startValue: 0,
        endValue: 1,
        property: "opacity",
      },
    ],
  },
  {
    start: 0, // Starts fading out when the component is 600px from the top
    end: 1200, // Ends fading out when the component is 800px from the top
    properties: [
      {
        startValue: 0,
        endValue: 0.2,
        property: "opacity",
      },
    ],
  },
  {
    start: 1200, // Starts fading out when the component is 600px from the top
    end: 1600, // Ends fading out when the component is 800px from the top
    properties: [
      {
        startValue: 0.3,
        endValue: 1,
        property: "opacity",
      },
    ],
  },
];

const HalfStickyComponent = () => {
  const fadeInOutDataPuss = createFadeInOutData(-600, "translateX");
  const fadeInOutDataKungFu = createFadeInOutData(600, "translateY");
  const fadeInOutDataDragon = createFadeInOutData(600, "translateX");

  return (
    <div className="movies-component">
      <h1>Movies</h1>
      <div className="movies-container">
        <Plx parallaxData={fadeInOutDataPuss}>
          <div className="opacity_test">
            <Atropos
              className="atropos-cover"
              activeOffset={5}
              shadow={true}
              onEnter={() => console.log("Enter")}
              onLeave={() => console.log("Leave")}
              onRotate={(x, y) => console.log("Rotate", x, y)}
            >
              <img
                src="src\assets\puss_in_boots_cover.jpg"
                data-atropos-offset="-5"
              />

              <img
                className="puss-in-boots_logo"
                src="src\assets\Puss-In-Boots-Logo.png"
                alt=""
                data-atropos-offset="5"
              />
            </Atropos>
          </div>
        </Plx>

        <Plx parallaxData={fadeInOutDataKungFu}>
          <div>
            <Atropos
              className="atropos-cover"
              activeOffset={5}
              shadow={true}
              onEnter={() => console.log("Enter")}
              onLeave={() => console.log("Leave")}
              onRotate={(x, y) => console.log("Rotate", x, y)}
            >
              <img
                src="src\assets\kung-fu-Cover.jpg"
                data-atropos-offset="-5"
              />
              <img
                className="logo"
                src="src\assets\Kung_Fu_Panda_logo.png"
                data-atropos-offset="5"
              />
            </Atropos>
          </div>
        </Plx>
        <Plx parallaxData={fadeInOutDataDragon}>
          <div>
            <Atropos
              className="atropos-cover kung-fu-panda"
              activeOffset={5}
              shadow={true}
              onEnter={() => console.log("Enter")}
              onLeave={() => console.log("Leave")}
              onRotate={(x, y) => console.log("Rotate", x, y)}
            >
              <img src="src\assets\dragon-cover.jpg" data-atropos-offset="-5" />
              <img
                className="logo"
                src="src\assets\dragon-logo.png"
                data-atropos-offset="5"
              />
            </Atropos>
          </div>
        </Plx>
      </div>
    </div>
  );
};

export default HalfStickyComponent;
