import React, { useState } from 'react';
import { Container, TextField, Button, Typography } from '@mui/material';

const RequestTransport = () => {
  const [requestDetails, setRequestDetails] = useState({
    pickupLocation: '',
    dropoffLocation: '',
    carId: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRequestDetails({ ...requestDetails, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You would send the requestDetails to the backend API
    console.log(requestDetails);
  };

  return (
    <Container>
      <Typography variant="h5" gutterBottom>Request Car Transportation</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Pickup Location"
          name="pickupLocation"
          fullWidth
          margin="normal"
          value={requestDetails.pickupLocation}
          onChange={handleChange}
        />
        <TextField
          label="Dropoff Location"
          name="dropoffLocation"
          fullWidth
          margin="normal"
          value={requestDetails.dropoffLocation}
          onChange={handleChange}
        />
        <TextField
          label="Car ID"
          name="carId"
          fullWidth
          margin="normal"
          value={requestDetails.carId}
          onChange={handleChange}
        />
        <Button type="submit" variant="contained" color="primary">Submit</Button>
      </form>
    </Container>
  );
};

export default RequestTransport;