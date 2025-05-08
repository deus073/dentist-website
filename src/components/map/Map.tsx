"use client";

import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

interface MapProps {
  address: string;
  coordinates: [number, number]; // [latitude, longitude]
}

const Map: React.FC<MapProps> = ({ address, coordinates }) => {
  useEffect(() => {
    // Fix for default marker icons in Leaflet with Next.js
    // This needs to be done in useEffect to avoid SSR issues
    (async () => {
      // Only run this on the client side
      if (typeof window !== 'undefined') {
        // Fix the icon paths by directly setting icon options
        // instead of deleting _getIconUrl
        L.Icon.Default.mergeOptions({
          iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
          iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
          shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
        });
      }
    })();
  }, []);

  return (
    <div className="h-[400px] w-full">
      <MapContainer 
        center={coordinates} 
        zoom={15} 
        scrollWheelZoom={false}
        style={{ height: '100%', width: '100%' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={coordinates}>
          <Popup>
            <strong>SmileDental</strong><br />
            {address}
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;