import React from "react";
import Iframe from "react-iframe";
import Graph from "./Graph";
import MyChart from "./MyChart";
//  http://www.youtube.com/embed/xDMP3i36naA
const Frames = () => {
  return (
    <div>
      <MyChart />
      <Iframe
        url=""
        width="400px"
        height="450px"
        id="myId"
        className="myClassname"
        display="initial"
        position="relative"
        allowFullScreen
      />
      <Graph />
    </div>
  );
};

export default Frames;
