/** @format */

import React from "react";
import FlowingMenu from "../FlowingMenu";
function Resume() {
  const demoItems = [
    {
      link: "/about",
      text: "ABOUT",
      image: "https://picsum.photos/600/400?random=1",
    },
    {
      link: "/projects",
      text: "PROJECTS",
      image: "https://picsum.photos/600/400?random=2",
    },
    {
      link: "/skills",
      text: "SKILLS",
      image: "https://picsum.photos/600/400?random=3",
    },
    {
      link: "/workexperience",
      text: "WORK EXPERIENCE",
      image: "https://picsum.photos/600/400?random=4",
    },
  ];
  return (
    <div className="mt-10" id="resume">
      <div style={{ height: "600px", position: "relative" }}>
        <FlowingMenu items={demoItems} />
      </div>
    </div>
  );
}

export default Resume;
