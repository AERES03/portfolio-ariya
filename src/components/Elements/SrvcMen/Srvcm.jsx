/** @format */

import React from "react";

function Srvcm({ number, name }) {
  return (
    <div className="border-b border-slate-500 p-3 flex flex-col justify-between gap-5 cursor-pointer hover:bg-white/5 group">
      <div className="flex items-center justify-between">
        <h1 className="text-6xl font-poppins font-bold group-hover:text-blue-500">
          {number}
        </h1>
        <h1 className="text-5xl group-hover:text-blue-500">ᯓ➤</h1>
      </div>
      <h1 className="text-3xl font-semibold  group-hover:text-blue-500">
        {name}
      </h1>
      <p className="text-[12px]">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime quasi
        cupiditate incidunt. Iusto hic eaque cumque quos atque voluptate
        repellendus.
      </p>
    </div>
  );
}

export default Srvcm;
