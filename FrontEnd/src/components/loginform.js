'use client';
import { useState } from 'react';
import Button from './button';
import Text from '../../data';

const MyForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      console.log(data);
      // Handle success or error response
    } catch (error) {
      console.error('Error submitting form:', error);
      // Handle error
    }
  };

  return (
    <form  method="POST" className="flex flex-col mt-4 gap-2 w-3/4" onSubmit={handleSubmit}>
      <label htmlFor="email">{Text.login.email}</label>
      <input
        className="h-9"
        type="email"
        id="email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <label htmlFor="password">{Text.login.pass}</label>
      <input
        className="h-9"
        type="password"
        id="password"
        name="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <Button text={Text.login.button} />
    </form>
  );
};

export default MyForm;