import React from 'react';

import AnimatedComponent from '../animatedComponent/AnimatedComponent';
import Footer from '../footer/Footer';
import Gallery from '../gallery/Gallery';
import Promo from '../promo/Promo';

const MainPage = () => (
  <AnimatedComponent>
    <Promo />
    <Gallery />
    <Footer theme="white" mt={180} />
  </AnimatedComponent>
);

export default MainPage;
