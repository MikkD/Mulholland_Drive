import React from 'react';
import './Main.css';
import Hero from '../Hero/Hero';
import ShopItems from '../ShopItems/ShopItems';
// import ScrollToTopButton from '../ScrollToTopButton/ScrollToTopButton'


function Main() {
  return (
    <div className="Main">
      <Hero />
      <ShopItems />
    </div >
  )
}

export default Main;
