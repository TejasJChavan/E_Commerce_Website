import React, { useState, useEffect } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

const imgs = [
  {
    url: "assets/electronics.jpg",
  },
  {
    url: "assets/furniture.jpg",
  },
  {
    url: "assets/fashion.jpg",
  },
];

function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  function nextSlide() {
    currentSlide !== imgs.length - 1
      ? setCurrentSlide(currentSlide + 1)
      : setCurrentSlide(0);
  }
  function previousSlide() {
    currentSlide !== 0
      ? setCurrentSlide(currentSlide - 1)
      : setCurrentSlide(imgs.length - 1);
  }

  useEffect(() => {
    const autoScroll = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(autoScroll);
  }, [currentSlide]);

  return (
    <>
      <div className="h-[600px] w-full m-auto my-16 px-8 relative group">
        <div className="h-full w-full relative rounded-3xl overflow-hidden">
          <img
            src={imgs[currentSlide].url}
            alt=""
            className="h-full w-full object-cover absolute cursor-pointer"
          />
        </div>
        <div
          onClick={previousSlide}
          className="hidden group-hover:block text-1 cursor-pointer absolute top-[50%] -translate-x-0 translate-y-[-50%] left-12"
        >
          <BsChevronCompactLeft size={30} />
        </div>
        <div
          onClick={nextSlide}
          className="hidden group-hover:block text-1 cursor-pointer absolute top-[50%] -translate-x-0 translate-y-[-50%] right-12"
        >
          <BsChevronCompactRight size={30} />
        </div>
        <div className="flex mt-4 justify-center">
          {imgs.map((img, index) => (
            <div
              className="text-xl cursor-pointer text-5"
              key={index}
              onClick={() => {
                setCurrentSlide(index);
              }}
            >
              <RxDotFilled />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Carousel;
