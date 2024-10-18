const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

let cars = [];

app.get('/api/cars', (req, res) => {
  res.json(cars);
});

app.post('/api/cars', (req, res) => {
  try {
    const newCar = {
      id: cars.length + 1,
      make: req.body.make,
      model: req.body.model,
      year: req.body.year,
      description: req.body.description
    };
    
    if (!newCar.make || !newCar.model || !newCar.year || !newCar.description) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    cars.push(newCar);
    res.status(201).json(newCar);
  } catch (error) {
    console.error('Error creating car:', error);
    res.status(500).json({ error: 'Failed to create car' });
  }
});

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// API routes here
app.get('/api/some-endpoint', (req, res) => {
    res.json({ message: 'Hello from the backend' });
});

// Catch-all route to serve the React app for any request not handled by the API
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

const cors = require('cors');
app.use(cors());

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});