import React from 'react';
import '../styles/main.scss';

import HeroSection from './HeroSection';
import About from './About';
import Apply from './Apply';
import Faq from './Faq';
import Footer from './Footer';

const App = () => {
  return(
    <div>
      <HeroSection />
      <About />
      <Apply />
      <Faq />
      <Footer />
    </div>
  );
};

export default App;
