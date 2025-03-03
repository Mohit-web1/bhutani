"use client";

import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Img1 from "@/public/assets/Cimg1.jpg";
import Img2 from "@/public/assets/Cimg2.jpg";
import Img3 from "@/public/assets/Cimg3.jpg";
import Img4 from "@/public/assets/Cimg4.jpg";
import Img5 from "@/public/assets/Cimg5.jpg";
import Img6 from "@/public/assets/Cimg6.jpg";
import Image from "next/image";
import CustomButton from "../customButton/page";

function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  useEffect(() => {
    AOS.refresh();
  }, [currentSlide]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
  };

  const slides = [
    { img: Img1, text: "Discover Amazing Places" },
    { img: Img2, text: "Experience the Best Views" },
    { img: Img3, text: "Adventure Awaits You" },
    { img: Img4, text: "Unforgettable Memories" },
    { img: Img5, text: "Relax & Unwind" },
    { img: Img6, text: "Capture the Moment" },
  ];

  return (
    <div className="slider-container relative w-full h-[80vh]">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="relative h-[80vh]">
            <Image
              src={slide.img}
              alt={`Slide ${index + 1}`}
              layout="fill"
              objectFit="cover"
              className="w-full h-full"
            />
            <div className="absolute inset-0 bg-black opacity-50"></div>

            <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
              <h2
                data-aos="fade-down"
                key={`heading-${currentSlide}`} 
                className="text-2xl sm:text-6xl font-bold mb-4"
              >
                {slide.text}
              </h2>

              <p
                data-aos="fade-up"
                key={`paragraph-${currentSlide}`} 
                className="text-lg mb-4"
              >
                This is a Real-E-state website
              </p>

              <div data-aos="zoom-in" key={`button-${currentSlide}`}>
                <CustomButton title="Let's see" />
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Carousel;
