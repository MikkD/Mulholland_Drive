import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import ShopItems from './components/ShopItems/ShopItems'

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        {/* Section 2 */}
        <ShopItems />


      </main>
    </div >
  );
}

export default App;
