import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import { ReactComponent as ArrowUp } from '../src/arrow-up.svg';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        {/* Hero Section */}
        <div className="hero">
          <div className="hero-title">
            <h1>Mulholland
              <span className="line"></span>
            </h1>
            <h1>Drive</h1>
            {/* <ArrowUp className="hero-button" /> */}
            {/* <button className="hero-button">Shop Now</button> */}
          </div>
        </div>
        {/* Section 2 */}
      </main>
    </div>
  );
}

export default App;
