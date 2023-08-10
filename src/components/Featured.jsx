import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faArrowRight,
  faDotCircle,
} from "@fortawesome/free-solid-svg-icons";

const Featured = () => {
  const sliders = [
    {
      url: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1590947132387-155cc02f3212?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1493770348161-369560ae357d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    },
    {
      url: "https://images.bolt.eu/store/2021/2021-05-03/fef8861a-c0ac-4b9a-b59d-ee3e7382655d.jpeg",
    },
  ];

  const firstSlider = () => {
    const isFirstSlide = currentIndex === 0;
    const newIdex = isFirstSlide ? sliders.length - 1 : currentIndex - 1;
    setCurrentIndex(newIdex);
  };
  const nextSlider = () => {
    const isLastSlide = currentIndex === sliders.length - 1;
    const newIdex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIdex);
  };

  const moveToNextSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="max-w-[1520px] mx-auto h-[500px] w-full py-4 px-4 relative group">
      <div
        className="w-full h-full rounded-xl bg-center bg-cover duration-500"
        style={{ backgroundImage: `url(${sliders[currentIndex].url})` }}
      ></div>
      <div className="hidden group-hover:block absolute top-[50%] translate-x-0 translate-y-[-50%] text-xl left-5 text-white bg-orange-700 p-2 rounded-full">
        <FontAwesomeIcon onClick={firstSlider} icon={faArrowLeft} />
      </div>
      <div className="hidden group-hover:block absolute top-[50%] translate-x-0 translate-y-[-50%] text-xl right-5 text-white bg-orange-700 p-2 rounded-full">
        <FontAwesomeIcon onClick={nextSlider} icon={faArrowRight} />
      </div>
      <div className="flex top-4 justify-center py2">
        {sliders.map((sliderItem, slideIndex) => (
          <div
            onClick={() => moveToNextSlide (slideIndex)}
            key={slideIndex}
            className=" cursor-pointer mr-1"
          >
            <FontAwesomeIcon className="text-[8px]" icon={faDotCircle} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Featured;
