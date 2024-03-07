import React from "react";
import "./landingpage.scss";
import video from "../assets/pexels-joseph-redfield-10755266 (2160p).mp4";

const Landing = () => {
  return (
    <div className="landing">
      <video src={video} autoPlay loop muted />
      <div className="content">
        <h1>WELCOME</h1>
        <p>Into the Unknown</p>
      </div>
    </div>
  );
};

export default Landing;
