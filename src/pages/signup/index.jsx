import { React, useState } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const SignUp = () => {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.username.trim() === '' || formData.password.trim() === '') {
      setErrorMessage('Please enter both username and password.');
    } else {
      if (formData.username === 'admin' && formData.password === 'admin123') {
        alert('Login successful!');
      } else {
        setErrorMessage('Invalid username or password.');
      }
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <form onSubmit={handleSubmit}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <h2>Login</h2>
          <TextField
            name="username"
            label="Username"
            variant="outlined"
            margin="normal"
            value={formData.username}
            onChange={handleInputChange}
          />
          <TextField
            name="password"
            label="Password"
            type="password"
            variant="outlined"
            margin="normal"
            value={formData.password}
            onChange={handleInputChange}
          />
          {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
          <Button type="submit" variant="contained" color="primary">
            Login
          </Button>
        </div>
      </form>
    </div>
  );
};


export default SignUp;
