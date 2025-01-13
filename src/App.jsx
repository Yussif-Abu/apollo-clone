import { useState } from 'react'
import Hero from './Component/Hero'
import Products from './Component/Products'
import Test from './Component/Test'
import Nav from './Component/Nav'
import Footer from './Component/Footer'
import Blog from './Component/Blog'
import About from './Component/About'


function App() {
  // const [isScrolled, setIsScrolled]= useState(false);

  // window.onscroll = ()=> {
  //   setIsScrolled(window.pageYOffset === 0 ? false : true);
  //   return () => (window.onscroll = null);
  // };
  // isScrolled={isScrolled}

  return (
    <>
    <Nav />
    <main className='relative overflow-x-hidden px-5'>
      <Hero/>
      <Products/>
      <Test/>
      <Blog/>
      <About/>
      <Footer/>
    </main>
    </>
   
  )
}

export default App
