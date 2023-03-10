export const displayMap = locations => {
  mapboxgl.accessToken = 'pk.eyJ1IjoiamVyZW15bmM2MyIsImEiOiJjbDZvcXVqNXkwZGNkM2NxbzJ3bmh6bXB5In0.phmAIyp2WIoQf0P5PRZA2w';
  const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    scrollZoom: false,
  });
  
  const bounds = new mapboxgl.LngLatBounds();
  
  locations.forEach(loc => {
    const el = document.createElement('div');
    el.className = 'marker';
  
    new mapboxgl
      .Marker({
        element: el,
        anchor: 'bottom'
      })
      .setLngLat(loc.coordinates)
      .addTo(map);
  
    new mapboxgl.Popup({
      offset: 30
    })
      .setLngLat(loc.coordinates)
      .setHTML(`<p>Day ${loc.day}: ${loc.description}</p>`)
      .addTo(map);
  
    bounds.extend(loc.coordinates);
  });
  
  map.fitBounds(bounds, {
    padding: {
      top: 200,
      bottom: 150,
      left: 200,
      right: 200
    }
  });
};