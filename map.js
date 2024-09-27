mapboxgl.accessToken = 
"pk.eyJ1IjoibmFwaGlsbGlwczEwIiwiYSI6ImNtMWNyem5vMzJlcWUybG9ubDdseDl2a24ifQ.heeu0xexmd8Rw2pDUyYz_g"; 

const map = new mapboxgl.Map({
    container: "map", // container ID for the map object (this points to the HTML element)
    style: "mapbox://styles/naphillips10/cm1e88owz00ps01nw7nrpbdry", //YOUR STYLE URL
    center: [-73.9442, 40.6482], // starting position [lng, lat] (google brooklyn)
    zoom: 11, // starting zoom (adjust it as you wish)
    projection: "globe", // display the map as a 3D globe
  });
  