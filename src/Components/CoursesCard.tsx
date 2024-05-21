import { useState } from "react";
import Slider from "react-slick";
import ArrowBack from "../assets/Icons/eva_arrow-back-fill.svg";
import ArrowNext from "../assets/Icons/eva_arrow-next-fill.svg";
import React from "../assets/react-icon.jpg";
import Phython from "../assets/python-logo.jpg";
import php from "../assets/php-icon.png";
import Nodejs from "../assets/nodejs-icon.png";
import UIUX from "../assets/Google-Icon.jpeg";
import Aws from "../assets/aws-icon.jpg";
import JavaScript from "../assets/js-icon.png";

const CoursesCard = ({
  listTestimoni = [
    {
      name: "React js",
      image: React,
      type: "Frontend",
      rating: "4.5",
      testimoni:
        "A JavaScript library for building user interfaces, ReactJS enables developers to create interactive and dynamic UI components efficiently.",
    },
    {
      name: "Phython",
      image: Phython,
      type: "Backend",
      rating: "4.5",
      testimoni:
        "A versatile programming language known for its simplicity and readability, Python is used development, data science, artificial intelligence, and automation.",
    },
    {
      name: "php",
      image: php,
      type: "Backend",
      rating: "4.5",
      testimoni:
        "A server-side scripting language, PHP is widely used for web development to create dynamic web pages and interact with databases.",
    },
    {
      name: "Nodejs",
      image: Nodejs,
      type: "Backend",
      rating: "4.5",
      testimoni:
        "An open-source, cross-platform JavaScript runtime environment, Node.js enables it efficient for building scalable network applications.",
    },
    {
      name: "UI UX",
      image: UIUX,
      type: "Design",
      rating: "4.5",
      testimoni:
        "UI focuses on the design of digital interfaces to ensure a visually appealing and intuitive interacting with a product, aiming to make it seamless, efficient, and enjoyable.",
    },
    {
      name: "AWS",
      image: Aws,
      type: "Cloud",
      rating: "4.5",
      testimoni:
        "A comprehensive cloud computing platform, AWS offers a wide array of services such as rapidly without the need for extensive infrastructure.",
    },
    {
      name: "Javascript",
      image: JavaScript,
      type: "Script",
      rating: "4.5",
      testimoni:
        " A scripting language primarily used for web development, JavaScript allows for dynamic, and enhanced user experience within web browsers.",
    },
  ],
}) => {
  const settings = {
    dots: true,
    customPaging: function () {
      return (
        <a className="">
          <span className="mx-2 rounded-l-full rounded-r-full h-4 w-4 block cursor-pointer transition-all "></span>
        </a>
      );
    },
    dotsClass: "slick-dots w-max absolute mt-20  ",
    infinite: true,

    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 1500,
    responsive: [
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const [sliderRef, setSliderRef] = useState<any>("");

  return (
    <div className="container mx-auto px-4 relative" id="courses">
      <Slider {...settings} arrows={false} ref={setSliderRef}>
        {listTestimoni.map((listTestimonis, index) => (
          <div className="px-3 pb-5 flex items-stretch" key={index}>
            <div
              className={`border-2 border-gray-500 hover:border-orange-500 transition-all rounded-lg p-8 flex flex-col bg-cover bg-center bg-opacity-5`}
            >
              <div className="flex flex-col xl:flex-row w-full items-stretch xl:items-center">
                <div className="flex order-2 xl:order-1">
                  <img
                    src={listTestimonis.image}
                    alt="Icon People"
                    className="h-12 w-12 object-cover"
                  />
                  <div className="flex flex-col ml-5 text-left">
                    <p className="text-lg text-black-600 capitalize">
                      {listTestimonis.name}
                    </p>
                    <p className="text-sm text-black-500 capitalize">
                      {listTestimonis.type}
                    </p>
                  </div>
                </div>
              </div>
              <p className="mt-5 text-left">“{listTestimonis.testimoni}”.</p>
            </div>
          </div>
        ))}
      </Slider>
      <div
        className="absolute left-0 top-1/2 transform -translate-y-1/2 flex items-center justify-center h-14 w-14 rounded-full bg-white border-primary border hover:bg-primary hover:text-white-500 transition-all text-primary cursor-pointer"
        onClick={sliderRef?.slickPrev}
      >
        <img src={ArrowBack} className="h-6 w-6" />
      </div>
      <div
        className="absolute right-0 top-1/2 transform -translate-y-1/2 flex items-center justify-center h-14 w-14 rounded-full bg-white border-primary border hover:bg-primary hover:text-white-500 transition-all text-primary cursor-pointer"
        onClick={sliderRef?.slickNext}
      >
        <img src={ArrowNext} className="h-6 w-6" />
      </div>
    </div>
  );
};

export default CoursesCard;
