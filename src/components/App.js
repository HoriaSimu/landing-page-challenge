import React, { useEffect } from 'react';
import '../styles/normalize.css';
import '../styles/main.scss';

import HeroSection from './HeroSection';
import About from './About';
import Apply from './Apply';
import Faq from './Faq';
import Footer from './Footer';

const App = () => {
  useEffect( () => {

    // for animations I used the solution proposed by Wes Bos here:
    // https://www.youtube.com/watch?v=uzRsENVD3W8
    
    function debounce(func, wait = 20, immediate = true) {
      var timeout;
      return function() {
        var context = this, args = arguments;
        var later = function() {
          timeout = null;
          if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
      };
    };

    const sliderImages = document.querySelectorAll('.slide-in');

    function checkSlide() {
      sliderImages.forEach(sliderImage => {
        // half way through the image
        const slideInAt = (window.scrollY + window.innerHeight) - sliderImage.height / 2;
        // bottom of the image
        const imageBottom = sliderImage.offsetTop + sliderImage.height;
        const isHalfShown = slideInAt > sliderImage.offsetTop;
        const isNotScrolledPast = window.scrollY < imageBottom;
        if (isHalfShown && isNotScrolledPast) {
          sliderImage.classList.add('active');
        } else {
          sliderImage.classList.remove('active');
        }
      });
    }

    window.addEventListener('scroll', debounce(checkSlide));
  }, []);

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
