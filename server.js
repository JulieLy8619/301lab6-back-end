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
app.get('/location', handleLocation)

// Helper Functions
function handleLocation(request, response) {
  console.log('location route hit!');
  response.send('response sent');
}

// Make sure the server is listening
app.listen(PORT, () => console.log(`Server alive and well on port ${PORT}`));