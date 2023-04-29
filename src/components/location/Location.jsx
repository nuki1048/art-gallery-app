// eslint-disable-next-line import/no-extraneous-dependencies
import { Icon } from 'leaflet';
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { Link } from 'react-router-dom';

import './Location.scss';
import iconLocation from '../../assets/icon-location.svg';
import Button from '../button/Button';
import Container from '../container/Container';
import Footer from '../footer/Footer';

const Location = () => {
  const customIcon = new Icon({
    iconUrl: iconLocation
  });
  return (
    <>
      <section className="location">
        <Link to="/">
          <Button
            text="BACK TO HOME"
            classes={['button__second', 'btn__home ']}
          />
        </Link>
        <MapContainer
          zoomControl={false}
          attributionControl={false}
          center={[41.482439, -71.310871]}
          zoom={16}
        >
          <TileLayer url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png" />
          <Marker position={[41.482439, -71.310871]} icon={customIcon}>
            <Popup>We are here!</Popup>
          </Marker>
        </MapContainer>
        <div className="location__info">
          <Container>
            <div className="location__wrapper">
              <h3 className="location__info_title">
                Our <br /> location
              </h3>
              <div className="item">
                <h5 className="location__info_address">99 King Street</h5>
                <div className="location__info_fullAddress">
                  Newport <br /> RI 02840 <br /> United States of America
                </div>
                <p className="location__info_text">
                  Our newly opened gallery is located near the Edward King House
                  on 99 King Street, the Modern Art Gallery is free to all
                  visitors and open seven days a week from 8am to 9pm.
                </p>
              </div>
            </div>
          </Container>
        </div>
      </section>
      <Footer theme="black" mt={0} />
    </>
  );
};

export default Location;
