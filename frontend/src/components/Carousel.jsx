import React, {useState, useEffect} from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import {RxDotFilled} from "react-icons/rx";

const imgs = [
  {
    url: "https://m.media-amazon.com/images/I/51wSUsHMHWL._AC_UF350,350_QL80_.jpg",
  },
  {
    url: "https://m.media-amazon.com/images/S/mms-media-storage-prod/final/BrandPosts/brandPosts/cb0a1dce-4115-4c6c-b349-8a9e4554cbab/749b1be0-2a32-4c7a-b53d-32e8ab9f6261/media._SL480_.jpeg",
  },
  {
    url: "https://m.media-amazon.com/images/S/mms-media-storage-prod/final/BrandPosts/brandPosts/bf01ecaa-ee1b-4d99-a176-56e6a5b50657/47c9fc92-0d4b-45ea-a39e-1e9f9d86c5f9/media._SL480_.jpeg",
  },
];

function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  function nextSlide(){
    currentSlide !== imgs.length-1 ? setCurrentSlide(currentSlide+1) : setCurrentSlide(0);
  };
  function previousSlide(){
    currentSlide !== 0 ? setCurrentSlide(currentSlide-1) : setCurrentSlide(imgs.length-1);
  };

  useEffect(() => {
    const autoScroll = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(autoScroll);
  }, [currentSlide]);
  
  return (
    <>
      <div className="h-[600px] max-w-[1300px] w-full m-auto my-16 px-8 relative group"
      >
        <div
          style={{ backgroundImage: `url(${imgs[currentSlide].url})` }}
          className="h-full w-full bg-cover bg-center bg-no-repeat rounded-3xl duration-500"
        ></div>
        <div
        onClick={previousSlide}
        className="hidden group-hover:block text-1 cursor-pointer absolute top-[50%] -translate-x-0 translate-y-[-50%] left-12">
          <BsChevronCompactLeft size={30} />
        </div>
        <div
        onClick={nextSlide}
        className="hidden group-hover:block text-1 cursor-pointer absolute top-[50%] -translate-x-0 translate-y-[-50%] right-12">
          <BsChevronCompactRight size={30} />
        </div>
        <div className="flex mt-4 justify-center">
          {imgs.map((img, index)=>(
            <div className="text-xl cursor-pointer text-5" key={index} onClick={()=>{setCurrentSlide(index)}}><RxDotFilled/></div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Carousel;
