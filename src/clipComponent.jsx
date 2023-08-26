import React from "react";
import videoBg from "./assets/videoBg.mp4";
const ClipContainer = () => {
  return (
    <div className="video-container">
      <video src={videoBg} autoPlay loop muted></video>
      <div className="container">
        <h1>DreamWorks</h1>
        <p>movies</p>
      </div>
    </div>
  );
};

export default ClipContainer;
