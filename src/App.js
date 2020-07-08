import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import ShopItems from './components/ShopItems/ShopItems';
import ScrollToTopBButton from './components/ScrollToTopButton/ScrollToTopButton';


function App() {
  const [offsetHeight, setOffsetHeight] = useState(document.documentElement.offsetHeight);
  const [bottomOfThePage, setBottomOfThePage] = useState(window.innerHeight + window.pageYOffset);
  const header = useRef();

  const handleToTopButton = () => {
    setOffsetHeight(document.documentElement.offsetHeight)
    setBottomOfThePage(window.innerHeight + window.pageYOffset)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleToTopButton)
  });

  return (
    <div className="App">
      <Header />
      <Hero />
      <ShopItems />
      {offsetHeight - bottomOfThePage < 300 ? <ScrollToTopBButton /> : null}
    </div >
  )
}

export default App;
