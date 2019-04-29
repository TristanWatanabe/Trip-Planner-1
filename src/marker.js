const mapboxgl = require('mapbox-gl')

const typeBackgrounds = {
    activity: 'http://i.imgur.com/WbMOfMl.png',
    hotel: 'http://i.imgur.com/D9574Cu.png',
    restaurant: 'http://i.imgur.com/cqR6pUI.png'
}

module.exports = function markerFactory(type, coordinates){
    const flag = document.createElement('div');
    flag.style.width = "32px";
    flag.style.height = "39px";
    flag.style.backgroundImage = `url(${typeBackgrounds[type.toLowerCase()]})`;
    const newLoc = new mapboxgl.Marker(flag).setLngLat(coordinates);
    return newLoc;
}

