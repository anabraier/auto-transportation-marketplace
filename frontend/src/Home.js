import React, { useState, useEffect } from 'react';
import { Button, Container, Typography, Box, Card, CardContent, CardActions } from '@mui/material';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Home = () => {
  const [cars, setCars] = useState([]);

  // Fetch car postings from the backend
  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/cars');
        setCars(response.data);  // Set the car postings data
      } catch (error) {
        console.error('Error fetching cars:', error);
      }
    };

    fetchCars();
  }, []);

  return (
    <Box
      sx={{
        backgroundColor: '#2c2c2c',
        minHeight: '100vh',
        color: '#fff',
        padding: '20px',
      }}
    >
      <Container
        sx={{
          textAlign: 'center',
          padding: '50px',
          backgroundColor: '#3b3b3b',
          borderRadius: '12px',
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5)',
        }}
      >
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
          Welcome to the Auto Transportation Marketplace
        </Typography>
        <Typography variant="subtitle1" gutterBottom sx={{ opacity: 0.8 }}>
          Find and post car transportation services with ease.
        </Typography>
        <Box mt={4}>
          <Link to="/post-car" style={{ textDecoration: 'none', marginRight: '20px' }}>
            <Button
              variant="contained"
              color="primary"
              size="large"
              sx={{
                backgroundColor: '#1f8ef1',
                padding: '12px 30px',
                borderRadius: '8px',
                boxShadow: '0 4px 10px rgba(31, 142, 241, 0.5)',
                '&:hover': { backgroundColor: '#1a73e8' },
              }}
            >
              Post a Car
            </Button>
          </Link>
        </Box>

        {/* Car Listings Section */}
        <Box mt={4}>
          {cars.length > 0 ? (
            cars.map((car) => (
              <Card
                key={car.id}
                sx={{
                  marginBottom: '20px',
                  backgroundColor: '#424242',
                  color: '#fff',
                  borderRadius: '10px',
                  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.4)',
                }}
              >
                <CardContent>
                  <Typography variant="h6">
                    {car.make} {car.model} ({car.year})
                  </Typography>
                  <Typography variant="body2" sx={{ marginBottom: '15px' }}>
                    {car.description}
                  </Typography>
                </CardContent>

                <CardActions sx={{ justifyContent: 'space-between', padding: '16px' }}>
                  <Link to={`/request-transport/${car.id}`} style={{ textDecoration: 'none' }}>
                    <Button
                      variant="contained"
                      color="primary"
                      size="small"
                      sx={{
                        backgroundColor: '#1f8ef1',
                        '&:hover': { backgroundColor: '#1a73e8' },
                      }}
                    >
                      Request Transport
                    </Button>
                  </Link>
                  <Link to={`/edit-post/${car.id}`} style={{ textDecoration: 'none' }}>
                    <Button
                      variant="contained"
                      color="secondary"
                      size="small"
                      sx={{
                        backgroundColor: '#e94560',
                        '&:hover': { backgroundColor: '#d63650' },
                      }}
                    >
                      Edit Post
                    </Button>
                  </Link>
                </CardActions>
              </Card>
            ))
          ) : (
            <Typography variant="h6">No car postings available at the moment.</Typography>
          )}
        </Box>
      </Container>
    </Box>
  );
};

export default Home;