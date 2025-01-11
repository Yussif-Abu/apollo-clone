import React from 'react'
import { FooterLinks } from '../Constants'

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-10 px-6">
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6">
      {FooterLinks.map((section, index) => (
        <div key={index}>
          <h4 className="font-semibold text-gray-800 mb-4">{section.title}</h4>
          <ul className="text-sm text-gray-600 space-y-2">
            {section.items.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
    <div className="flex justify-between items-center mt-10">
      <div className="flex gap-4">
        <a href="#" className="text-blue-500">Get Apollo Mobile App</a>
        <img src="/google-play-badge.png" alt="Google Play" className="h-10" />
        <img src="/app-store-badge.png" alt="App Store" className="h-10" />
      </div>
      <div className="flex gap-4">
        <a href="#" className="text-gray-500">Facebook</a>
        <a href="#" className="text-gray-500">X (Twitter)</a>
        <a href="#" className="text-gray-500">LinkedIn</a>
        <a href="#" className="text-gray-500">YouTube</a>
      </div>
    </div>
  </footer>
  )
}

export default Footer