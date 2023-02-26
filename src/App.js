//rafce is a shortcut to create a react Arrow function component
import React from 'react';

import { AboutUs, Chef, FindUs, Footer, Gallery, Header, Intro, Laurels, SpecialMenu } from './containers';
import { Navbar } from './components';
import './App.css';

import './App.css';

const App = () => {
  return (
    <div>
        <Navbar />
        <Header />
        <AboutUs />
        <SpecialMenu />
        <Chef />
        <Intro />
        <Laurels />
        <Gallery />
        <FindUs />
        <Footer />        
      
    </div>
  )
}

export default App;
