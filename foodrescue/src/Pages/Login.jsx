import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Handle Login (This could be a custom API call or other authentication method)
  const handleLogin = async () => {
    // Here, replace with your custom login logic, API call, etc.
    // For example, you can replace Firebase with a backend service.
    try {
      console.log('Logging in with', email, password);
      
      // Simulate a successful login
      alert('Login successful!');
    } catch (error) {
      console.error('Login failed:', error.message);
      alert('Login failed! ' + error.message);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleLogin();
        }}
      >
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <button type="submit">Log In</button>
      </form>
    </div>
  );
};

export default Login;
