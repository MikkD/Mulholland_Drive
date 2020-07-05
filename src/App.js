import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import FirstSection from './components/FirstSection/FirstSection';

function App(props) {
  return (
    <div className="App">
      <Header theLocation={props} />
      <FirstSection />
    </div >
  )
}

export default App;
