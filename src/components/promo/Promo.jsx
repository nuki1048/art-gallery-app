import React from 'react';
import { Link } from 'react-router-dom';

import './Promo.scss';
import Button from '../button/Button';
import Container from '../container/Container';

const Promo = () => (
  <section className="promo">
    <Container>
      <h1 className="promo__title">
        MODERN <br /> ART GALLERY
      </h1>
      <div>
        <p className="promo__info">
          The arts in the collection of the Modern Art Gallery all started from
          a spark of inspiration. Will these pieces inspire you? Visit us and
          find out.
        </p>
        <Link to="/location">
          <Button
            classes={['button__main', 'margin-right-90', 'mt-64']}
            text="OUR LOCATION"
          />
        </Link>
      </div>
    </Container>
  </section>
);

export default Promo;
