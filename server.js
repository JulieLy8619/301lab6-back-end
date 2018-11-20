'use strict';

// Application dependencies (Express & CORS)
const express = require('express');
const cors = require('cors');

// Load environment variables with DotENV
require('dotenv').config();

// Application setup
const PORT = process.env.PORT; // environment variables
const app = express(); // creates app instance
app.use(cors()); // tells app to use cors

// API Routes
app.get('/location', (request,response) => {
  console.log(request.query.data, 'is the query that came from the search field in the browser?????');
  const locationData = searchToLatLong(request.query.data);
  console.log(locationData);
  response.send(locationData);
});

// Helper Functions
function searchToLatLong(query) {
  const geoData = require('./data/geo.json');
  const location = new Location(geoData.results[0]);
  location.search_query = query;
  return location;
}

function Location(data) {
  this.formatted_query = data.formatted_address;
  this.latitude = data.geometry.location.lat;
  this.longitude = data.geometry.location.lng;
}

app.listen(PORT, () => console.log(`App is up on ${PORT}`));
