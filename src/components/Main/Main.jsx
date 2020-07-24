import React from 'react';
import './Main.css';
import Hero from '../Hero/Hero';
import ShopItems from '../ShopItems/ShopItems';
import Carousel from './Carousel/Carousel';
// import ScrollToTopButton from '../ScrollToTopButton/ScrollToTopButton'


function Main() {
  console.log('~~~~~~~~~~~~~~~Main.jsx~~~~~~~~~~~~~~~')
  return (
    <div className="Main">
      <Hero />
      <ShopItems />
      <Carousel />
    </div >
  )
}

export default Main;
