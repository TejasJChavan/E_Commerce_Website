import React from "react";

function Grid() {
  return (
    <div className="grid max-w-[1300px] m-auto py-10 px-3 grid-cols-1 auto-rows-[200px] grid-rows-[200px] lg:grid-cols-[45%_15%_auto] lg:grid-rows-[200px_400px] gap-8">
      <div
        className="rounded-xl lg:col-span-2 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url("https://img.etimg.com/thumb/width-1200,height-1200,imgsize-73742,resizemode-75,msid-109781734/top-trending-products/news/amazon-great-summer-sale-2024-top-deals-on-acs.jpg")`,
        }}
      ></div>
      <div
        className="rounded-xl bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url("https://cdn.mos.cms.futurecdn.net/hqWyzQqnXU4QiLmTPhfVVQ.jpg")`,
        }}
      ></div>
      <div
        className="rounded-xl bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url("https://img.etimg.com/thumb/width-1600,height-900,imgsize-188330,resizemode-75,msid-104311733/top-trending-products/news/amazon-sale-2023-best-deals-save-more-on-laptops-smartwatches-headphones-tablets-and-all-other-electronics.jpg")`,
        }}
      ></div>
      <div
        className="rounded-xl lg:col-span-2 bg-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url("https://images.news18.com/ibnlive/uploads/2020/08/1596601635_amazon-prime-day.jpg?impolicy=website&width=640&height=480")`,
        }}
      ></div>
    </div>
  );
}

export default Grid;
