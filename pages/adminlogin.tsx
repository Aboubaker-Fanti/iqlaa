import React, { useState } from 'react';
import { useRouter } from 'next/router';
import './AdminLogin.css';

const Adminlogin: React.FC = () => {
  const router = useRouter();
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string | null>(null); // State for errors

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null); // Reset error message

    if (!username.trim() || !password.trim()) {
      setError('Both fields are required.');
      return;
    }

    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: username.trim(), password: password.trim() }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("token", data.token); // Store token before redirect
        router.push('/admin'); 
      } else {
        setError(data.error || 'Invalid credentials');
      }
    } catch {
      setError('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="container">
      <form className="form" onSubmit={handleLogin}>
        <p id="heading">Login</p>
        
        {error && <p className="error">{error}</p>} {/* Display error message */}

        <div className="field">
          <input
            placeholder="Username"
            className="input-field"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>

        <div className="field">
          <input
            placeholder="Password"
            className="input-field"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button className="button3" type="submit">Login</button>
      </form>
    </div>
  );
};

export default Adminlogin;
