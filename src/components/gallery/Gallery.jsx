import React from 'react';

import './Gallery.scss';
import galleryGrid1 from '../../assets/desktop/image-grid-1.jpg';
import galleryGrid2 from '../../assets/desktop/image-grid-2.jpg';
import galleryGrid3 from '../../assets/desktop/image-grid-3.jpg';
import Container from '../container/Container';

const Gallery = () => (
  <section className="gallery">
    <Container>
      <div className="gallery__grid">
        <div className="grid-item_info">
          <h2 className="info__title">
            Your Day at <br /> the Gallery
          </h2>
          <p className="info__text">
            Wander through our distinct collections and find new insights about
            our artists. Dive into the details of their creative process.
          </p>
        </div>
        <img src={galleryGrid1} alt="" className="grid-item_firstImg" />
        <img src={galleryGrid2} alt="" className="grid-item_secondImg" />
        <img src={galleryGrid3} alt="" className="grid-item_thirdImg" />
        <div className="grid-item_secondInfo">
          <h3 className="info__title info__title_white">
            Come & me <br /> inspired
          </h3>
          <p className="info__text info__text_white">
            We’re excited to welcome you to our gallery and see how our
            collections influence you.
          </p>
        </div>
      </div>
    </Container>
  </section>
);

export default Gallery;
