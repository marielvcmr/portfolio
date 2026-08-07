import React, { useState } from 'react';
import Button from './Button';
import InputField from './InputField';
import { validateInputs, handleUserLogin, handleUserRegister } from './authUtils'; // Imports all utilities
import './AuthPage.css';

export default function AuthPage({ onLoginSuccess }) {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    // Rule Check Step
    const validationError = validateInputs(username, password);

    if (validationError) { // if not null there was an error
      setError(validationError);
      return; // returns the error
    }


    if (isLogin) {
      const result = handleUserLogin(username, password);
      if (result.success) {
        onLoginSuccess();
      } else {
        setError(result.error);
      }
    } else {
      const result = handleUserRegister(username, password);
      if (result.success) {
        alert('Account created successfully! You can now log in.');
        setIsLogin(true);
        setPassword('');
      } else {
        setError(result.error);
      }
    }
  };

  return (
    <div className="auth-container">
      <h1 className="auth-title">
        {isLogin ? "Login to see\nMarielv’s Portfolio!" : "Create your\nAccount"}
      </h1>

      <form onSubmit={handleSubmit} className="auth-card">
        <InputField 
          label="Username:" 
          type="text" 
          value={username} 
          onChange={setUsername} 
        />

        <InputField 
          label="Password:" 
          type="password" 
          value={password} 
          onChange={setPassword} 
        />

        {error && <p className="error-message">{error}</p>}

        <div className="button-wrapper">
          <Button type="submit">
            {isLogin ? 'Login' : 'Register'}
          </Button>
        </div>
      </form>

      <Button className="secondary-btn" onClick={() => { setIsLogin(!isLogin); setError(''); }}>
        {isLogin ? 'Create account' : 'Already have an account? Login'}
      </Button>
    </div>
  );
}
