import React from 'react'
import { blogs } from '../Constants'
import Trust from './Trust'

const Blog = () => {
  return (
    <section className="flex mb-10">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">Blogs and Articles for You (30)</h2>
          <a href="#" className="text-blue-500 font-medium">
            View All
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 mb-10">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg overflow-hidden transition hover:shadow-lg"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xs font-semibold text-gray-800 ">
                  {blog.title}
                </h3>
                <div className='flex flex-row gap-1 items-center justify-center'>
                    <p className="text-sm text-gray-500 ">{blog.author}</p>
                    <p className="text-sm text-gray-500">{blog.date}</p>

                </div>
              </div>
            </div>
          ))}
        </div>
        <Trust/>
      </div>
    </section>
  )
}

export default Blog