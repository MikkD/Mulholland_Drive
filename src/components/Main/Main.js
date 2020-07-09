import React from 'react';
import './Main.css';
import Hero from '../Hero/Hero';
import ShopItems from '../ShopItems/ShopItems';
import ScrollToTopButton from '../ScrollToTopButton/ScrollToTopButton'


function Main() {
  return (
    <div className="App">
      <Hero />
      <ShopItems />
      <ScrollToTopButton />
    </div >
  )
}

export default Main;
