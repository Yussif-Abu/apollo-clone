import React from "react";
import { tests, testslides } from "../Constants";
import Button from "./Button";
import { ask_apollo, DT_Banner_2 } from "../assets/images";
import CustomSwiper from "./CustomSwiper";

const Test = () => {
  return (
    <div className="flex flex-col gap-6 w-full ">
      {/* Banner */}
        <img
          src={ask_apollo}
          alt="Banner"
          className="w-full h-full object-cover rounded-lg"
        />
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold">Top Booked Tests (42)</h2>
        <a href="#" className="text-blue-500 font-medium hover:underline">
          View All
        </a>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {tests.map((test) => (
          <div
            key={test.id}
            className="border rounded-lg p-4 shadow-sm bg-white"
          >
            <div className="flex items-center gap-4">
              <img src={test.icon} alt={test.name} className="w-16 h-16" />
              <div>
                <h3 className="text-md font-semibold">{test.name}</h3>
                <p className="text-sm text-gray-500">{test.details}</p>
              </div>
            </div>
            <div className="flex justify-between items-center mt-4">
              <div>
                <p className="text-sm text-green-600">{test.cashback}</p>
                <div className="flex items-baseline mt-2">
                  <span className="text-lg font-bold text-gray-800">
                    {test.price}
                  </span>
                  <span className="text-sm line-through text-gray-400 ml-2">
                    {test.originalPrice}
                  </span>
                  <span className="text-sm text-green-600 ml-2">
                    {test.discount}
                  </span>
                </div>
              </div>
              <Button label="Add" backgroundColor="bg-blue-500" textColor="text-white" className=" px-4 py-2 rounded" />
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-6 w-full  mb-10">
        {/* Banner */}
        <img
          src={DT_Banner_2}
          alt="Banner"
          className="w-full h-full object-cover rounded-lg mb-10"
        />
        <div className="flex justify-between items-center mb-4"> 
        <CustomSwiper
          slides={testslides.map((slide) => (
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
      </div>
    </div>
  );
};

export default Test;
