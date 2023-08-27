import React from "react";
import ClipContainer from "./clipComponent"; // Corrected import
import MyComponent from "./plxEx";
import HalfStickyComponent from "./halfStickComponent";
import Heroes from "./heroes";
import SecondQuote from "./SecondQuote";
function App() {
  return (
    <div>
      <ClipContainer />
      <MyComponent />
      <HalfStickyComponent />
      <SecondQuote />
      <Heroes />
    </div>
  );
}

export default App;
