import React from "react";

function Grid() {
  return (
    <div className="grid m-auto py-10 px-8 grid-cols-1 auto-rows-[200px] grid-rows-[200px] lg:grid-cols-[45%_15%_auto] lg:grid-rows-[300px_400px] gap-10">
      <div
        className="cursor-pointer rounded-xl lg:col-span-2 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url("assets/grid1.jpg")`,
        }}
      ></div>
      <div
        className="cursor-pointer rounded-xl bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url("assets/grid2.jpg")`,
        }}
      ></div>
      <div
        className="cursor-pointer rounded-xl bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url("assets/grid3.jpg")`,
        }}
      ></div>
      <div
        className="cursor-pointer rounded-xl lg:col-span-2 bg-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url("assets/grid4.jpg")`,
        }}
      ></div>
    </div>
  );
}

export default Grid;
