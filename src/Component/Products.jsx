import React from 'react'
import {categories } from '../Constants';
import { Circle_Banner } from '../assets/images';

const Products = () => {

  return (
    <div className="flex flex-col gap-6 w-full  mb-10">
    {/* Banner */}
    <img
       src={Circle_Banner}
       alt="Banner"
      className="w-full h-full object-cover rounded-lg"
      />
    <h2 className="text-lg font-bold mb-4">Shop By Category (12)</h2>
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
      {categories.map((category) => (
        <div
          key={category.id}
          className="flex flex-col items-center border rounded-lg p-4 shadow-sm bg-white"
        >
          <div className="w-20 h-20 mb-2 bg-gray-200 rounded">
            {category.image ? (
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover rounded"
              />
            ) : (
              <span className="text-sm text-gray-500">Product Image</span>
            )}
          </div>
          <p className="text-center text-sm font-medium text-gray-700">
            {category.name}
          </p>
        </div>
      ))}
    </div>
  </div>
  )
}

export default Products