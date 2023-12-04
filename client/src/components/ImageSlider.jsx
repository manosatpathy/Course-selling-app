import { useState, useEffect } from "react";
import { sliderImgLink } from "../utils/sliderImgLink";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

const ImageSlider = () => {
  const [imgIndex, setImgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setImgIndex((prevIndex) => (prevIndex + 1) % sliderImgLink.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const goToPrevious = () => {
    setImgIndex((prevIndex) => (prevIndex - 1 + sliderImgLink.length) % sliderImgLink.length);
  };

  const goToNext = () => {
    setImgIndex((prevIndex) => (prevIndex + 1) % sliderImgLink.length);
  };

  return (
    <div className="relative overflow-hidden w-[760px] h-[370px] rounded-xl my-14 select-none">
      <img
        src={sliderImgLink[imgIndex]}
        alt="image"
        className="w-full h-full transition-transform duration-500 ease-in-out transform"
      />
      <div className="absolute left-3 top-1/2 transform -translate-y-1/2 group">
        <ChevronLeftIcon
          className="text-white w-7 h-7 cursor-pointer group-hover:opacity-50 transition-opacity"
          onClick={goToPrevious}
        />
      </div>
      <div className="absolute right-3 top-1/2 transform -translate-y-1/2 group">
        <ChevronRightIcon
          className="text-white w-7 h-7 cursor-pointer group-hover:opacity-50 transition-opacity"
          onClick={goToNext}
        />
      </div>
    </div>
  );
};

export default ImageSlider;
