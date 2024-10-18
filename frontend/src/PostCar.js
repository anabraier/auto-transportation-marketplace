import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Box } from '@mui/material';
import axios from 'axios';

const PostCar = () => {
  const [carDetails, setCarDetails] = useState({
    make: '',
    model: '',
    year: '',
    description: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCarDetails({ ...carDetails, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log('Submitting car details:', carDetails);  // Log the car details being sent
      const response = await axios.post('http://localhost:5001/api/cars', carDetails);
      console.log('Server response:', response);
      alert('Car posted successfully!');
      setCarDetails({ make: '', model: '', year: '', description: '' }); // Reset form
    } catch (error) {
      console.error('Error posting car:', error);  // Log the actual error
      alert('Error posting car. Please try again.');
    }
  };

  return (
    <Box
      sx={{
        backgroundColor: '#2c2c2c',
        minHeight: '100vh',
        color: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Container
        sx={{
          backgroundColor: '#3b3b3b',
          padding: '40px',
          borderRadius: '12px',
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5)',
          maxWidth: '500px',
        }}
      >
        <Typography variant="h4" gutterBottom sx={{ textAlign: 'center', fontWeight: 'bold' }}>
          Post a Car
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Make"
            name="make"
            value={carDetails.make}
            onChange={handleChange}
            margin="normal"
            sx={{ backgroundColor: '#fff', borderRadius: '8px' }}
          />
          <TextField
            fullWidth
            label="Model"
            name="model"
            value={carDetails.model}
            onChange={handleChange}
            margin="normal"
            sx={{ backgroundColor: '#fff', borderRadius: '8px' }}
          />
          <TextField
            fullWidth
            label="Year"
            name="year"
            type="number"
            value={carDetails.year}
            onChange={handleChange}
            margin="normal"
            sx={{ backgroundColor: '#fff', borderRadius: '8px' }}
          />
          <TextField
            fullWidth
            label="Description"
            name="description"
            value={carDetails.description}
            onChange={handleChange}
            margin="normal"
            multiline
            rows={4}
            sx={{ backgroundColor: '#fff', borderRadius: '8px' }}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={{ marginTop: '20px', padding: '10px 0', backgroundColor: '#1f8ef1' }}
          >
            Submit
          </Button>
        </form>
      </Container>
    </Box>
  );
};

export default PostCar;