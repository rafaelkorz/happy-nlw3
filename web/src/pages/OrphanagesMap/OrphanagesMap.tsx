import React from 'react';

import { Map, TileLayer } from 'react-leaflet';

import { Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';

import 'leaflet/dist/leaflet.css';
import './styles.css';

import mapMarker from '../../images/map-marker.svg';

const OrphanagesMap = () => {
  return (
    <div id='page-map'>
      <aside>
        <header>
          <img src={mapMarker} alt='Happy' />

          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando a sua visita :)</p>
        </header>

        <footer>
          <strong>Indaial</strong>
          <span>Sanata Catarina</span>
        </footer>
      </aside>

      <Map
        center={[-26.9224207, -49.2418892]}
        zoom={15}
        style={{ width: '100%', height: '100%' }}
      >
        <TileLayer
          url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
        />
      </Map>

      <Link to='' className='create-orphanage'>
      </Link>
    </div>
  );
};

export default OrphanagesMap;