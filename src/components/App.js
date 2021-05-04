import React from 'react';
import '../styles/normalize.css';
import '../styles/main.scss';

import HeroSection from './HeroSection';
import About from './About';
import Apply from './Apply';
import Faq from './Faq';
import Footer from './Footer';

const App = () => {
  return(
    <div className="main-wrapper">
      <HeroSection />
      <main>
        <About />
        <Apply />
        <Faq />
      </main>
      <Footer />
    </div>
  );
};

export default App;
