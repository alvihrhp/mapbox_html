mapboxgl.accessToken="pk.eyJ1IjoiYWx2aWhyaHAiLCJhIjoiY2wyMDhjdWt6MHU1MjNjcWRnYW1vcHRmZCJ9.ri9aI1frnwaQPM078Ngotw"
const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-74.5, 40],
    zoom: 9,
    doubleClickZoom: true
});