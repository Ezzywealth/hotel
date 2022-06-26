import React from "react";
import Bar from "./Bar";
import Events from "./Events";
import Home from "./Home";
import Info from "./Info";
import News from "./News";
import Rooms from "./Rooms";

const Homepage = () => {
  return (
    <div>
      <Home />
      <Info />
      <Rooms />
      <Events />
      <Bar />
      <News />
    </div>
  );
};

export default Homepage;
