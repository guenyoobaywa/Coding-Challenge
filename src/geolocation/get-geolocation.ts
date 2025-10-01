async function fetchAddress(lat: number, lon: number) {
  const addressResponse = await fetch(`https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json`);
  const addressData = await addressResponse.json();
  return addressData;
}

function getCurrentPosition(options?: PositionOptions) {
  return new Promise<GeolocationPosition>((resolve, reject) => {
    if (!('geolocation' in navigator)) {
      reject(new Error('Geolocation is not supported by your browser.'));
      return;
    }
    navigator.geolocation.getCurrentPosition(resolve, reject, options);
  });
}

async function getGeoLocation() {
  const pos = await getCurrentPosition();

  const { latitude, longitude } = pos.coords;
  return fetchAddress(latitude, longitude);
}

export { getGeoLocation };
