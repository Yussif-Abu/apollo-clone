import React from 'react'
import { trust } from '../Constants'

const Trust = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:flex flex-row gap-3 items-center justify-center w-full mb-10">
            {trust.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center rounded-lg overflow-hidden "
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-16 h-16 mb-5"
                />
                <p className='text-blue-800 font-semibold'>{item.title}</p>
              </div>
            ))}
          </div>
  )
}

export default Trust