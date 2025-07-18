import React from 'react';

const Map = () => {
  return (
    <div className="map-wrapper mt-4" style={{ width: '100%', height: '200px', overflow: 'hidden', borderRadius: '8px' }}>
      <iframe
        title="FashionHive Location"
        width="100%"
        height="100%"
        frameBorder="0"
        scrolling="no"
        marginHeight="0"
        marginWidth="0"
        src="https://www.openstreetmap.org/export/embed.html?bbox=78.3980458%2C17.4023487%2C78.4180458%2C17.4223487&layer=mapnik&marker=17.4123487%2C78.4080458"
        style={{ border: '1px solid #ccc', borderRadius: '8px' }}
      ></iframe>
      <small>
        <a
          href="https://www.openstreetmap.org/?mlat=17.4123487&mlon=78.4080458#map=15/17.4123/78.4080"
          target="_blank"
          rel="noreferrer"
        >
          View Larger Map
        </a>
      </small>
    </div>
  );
};

export default Map;

