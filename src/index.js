const mapboxgl = require("mapbox-gl");

mapboxgl.accessToken = 'pk.eyJ1IjoidHJpc3RhbndhdGFuYWJlIiwiYSI6ImNqdjJpdWx2cTI1YTMzeW8wMnB5ejM5dWUifQ.4wLj2OKbpmgLdWMbCexAQg';

const map = new mapboxgl.Map({
  container: 'map',
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

const flag = document.createElement('div');
flag.style.width = "32px";
flag.style.height = "39px";
flag.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";
new mapboxgl.Marker(flag).setLngLat([-74.009151, 40.705086]).addTo(map);

// map.on('load', function() {
//     // Insert the layer beneath any symbol layer.
//     var layers = map.getStyle().layers;
     
//     var labelLayerId;
//     for (var i = 0; i < layers.length; i++) {
//     if (layers[i].type === 'symbol' && layers[i].layout['text-field']) {
//     labelLayerId = layers[i].id;
//     break;
//     }
//     }
     
//     map.addLayer({
//     'id': '3d-buildings',
//     'source': 'composite',
//     'source-layer': 'building',
//     'filter': ['==', 'extrude', 'true'],
//     'type': 'fill-extrusion',
//     'minzoom': 15,
//     'paint': {
//     'fill-extrusion-color': '#aaa',
     
//     // use an 'interpolate' expression to add a smooth transition effect to the
//     // buildings as the user zooms in
//     'fill-extrusion-height': [
//     "interpolate", ["linear"], ["zoom"],
//     15, 0,
//     15.05, ["get", "height"]
//     ],
//     'fill-extrusion-base': [
//     "interpolate", ["linear"], ["zoom"],
//     15, 0,
//     15.05, ["get", "min_height"]
//     ],
//     'fill-extrusion-opacity': .6
//     }
//     }, labelLayerId);
//     });
