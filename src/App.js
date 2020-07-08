import React, { useState, useEffect } from 'react';
import './App.css';
import Hero from './components/Hero/Hero';
import ShopItems from './components/ShopItems/ShopItems';
import ScrollToTopButton from './components/ScrollToTopButton/ScrollToTopButton';


function App() {
  return (
    <div className="App">
      <Hero />
      <ShopItems />
      <ScrollToTopButton />
    </div >
  )
}

export default App;
