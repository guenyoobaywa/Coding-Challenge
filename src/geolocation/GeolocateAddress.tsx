import React, { useState } from 'react';
import { getGeoLocation } from './get-geolocation';

interface GeoAddress {
  'ISO3166-2-lvl4': string;
  house_number: number;
  road: string;
  suburb: string;
  city_district: string;
  city: string;
  state: string;
  postcode: number;
  country: string;
  country_code: string;
}

const GeolocateAddress: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [coords, setCoords] = useState<{ lat: number; lon: number } | null>(null);
  const [address, setAddress] = useState<GeoAddress | null>(null);
  const [error, setError] = useState<string>('');

  const handleClick = async () => {
    setLoading(true);
    setError('');
    setAddress(null);
    setCoords(null);

    try {
      const geoAddress = await getGeoLocation();
      setAddress(geoAddress.address);
    } catch (err) {
      setError('Failed to retrieve location');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <button
        onClick={handleClick}
        disabled={loading}
        style={{
          padding: '0.6rem 1rem',
          borderRadius: 10,
          border: '1px solid #ccc',
          cursor: loading ? 'not-allowed' : 'pointer',
        }}
      >
        {loading ? 'Locating…' : 'Find My Address'}
      </button>

      {coords && (
        <p style={{ marginTop: 12 }}>
          <strong>Coordinates:</strong> {coords.lat.toFixed(6)}, {coords.lon.toFixed(6)}
        </p>
      )}

      {address && (
        <p style={{ marginTop: 8 }}>
          <strong>Street:</strong> {address.road} {address.house_number}, {address.postcode} {address.city}
        </p>
      )}

      {error && (
        <p style={{ marginTop: 8, color: 'crimson' }}>
          <strong>Error:</strong> {error}
        </p>
      )}

      <p style={{ marginTop: 16, fontSize: 12, color: '#666' }}>
        Powered by{' '}
        <a href="https://nominatim.openstreetmap.org" target="_blank" rel="noreferrer">
          OpenStreetMap Nominatim
        </a>
      </p>
    </div>
  );
};

export default GeolocateAddress;
