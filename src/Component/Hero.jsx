import React from 'react';
import CustomSwiper from './CustomSwiper';
import { slidesData, pharmacy, health } from '../Constants';
import { IoIosArrowForward } from 'react-icons/io';

const Hero = () => {
  return (
    <section className="flex flex-col gap-6 items-center justify-center w-full  ">
      {/* Slider */}
      <div className="w-full rounded-xl shadow-md mb-10">
        <CustomSwiper
          slides={slidesData.map((slide) => (
            <div
              key={slide.id}
              className={`flex flex-col items-center justify-center h-48 md:h-50 lg:h-70 ${slide.bgColor} rounded-lg`}
            >
              <img
                src={slide.img}
                alt="Image"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          ))}
          autoplayDelay={5000}
          spaceBetween={20}
          swiperClassName="rounded-lg shadow-md"
        />
      </div>

      {/* Pharmacy Components */}
      <div className="flex flex-col md:flex-row justify-between gap-3 w-full mb-10">
        {pharmacy.map((item, index) => (
          <div
            key={index}
            className={`flex flex-row justify-between items-center p-4 rounded-lg w-full md:w-[48%] lg:w-[30%] ${
              index % 2 === 0 ? 'bg-blue-100' : 'bg-red-100'
            }`}
          >
            <div className="flex flex-row gap-4 items-center">
              <img src={item.img} alt={item.title} className="w-16 h-16" />
              <div className="flex flex-col">
                <h3 className="text-md font-bold">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.tag}</p>
              </div>
            </div>
            <IoIosArrowForward className="text-gray-600 text-lg" />
          </div>
        ))}
      </div>

      {/* Health Components */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:flex flex-row gap-3 w-full mb-10">
        {health.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center rounded-lg overflow-hidden shadow-md"
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
