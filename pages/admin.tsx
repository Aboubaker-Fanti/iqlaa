import React, { useState, useEffect } from 'react';
import './AdminPage.css'; // Combined CSS file
import { getIqlaaData, incrementFirestoreFields } from "./api/filestore";

const AdminPage = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
const [data, setData] = useState<{ visites: number; start_pool: number; finish_pool: number }>({
  visites: 0,
  start_pool: 0,
  finish_pool: 0,
});
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  
  
  useEffect(() => {
    // Check if user is authenticated
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true);
      fetchDashboardData();
    }
    setIsLoading(false);
  }, []);
  
  const fetchDashboardData = async () => {
    try {
        const result = await getIqlaaData();
        const { visites = 0, start_pool = 0, finish_pool = 0 } = result || {};
          setData({ visites, start_pool, finish_pool });
      
    } catch (error) {
      console.error("Error fetching dashboard data:", error);
    }
  };
  
  const handleLogin = async (e) => {
    e.preventDefault();
    incrementFirestoreFields({login_admin: 1});
    
    setError(null);
    
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
        localStorage.setItem("token", data.token);
        setIsAuthenticated(true);
        fetchDashboardData();
      } else {
        setError(data.error || 'Invalid credentials');
      }
    } catch {
      setError('Something went wrong. Please try again.');
    }
  };
  
  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
  };
  
  if (isLoading) {
    return <div className="loading">Loading...</div>;
  }
  
  return (
    <div className="page-container">
      {isAuthenticated ? (
        // Admin Dashboard
        <div className="dashboard-container">
          <header className="dashboard-header">
            <h1>Admin Dashboard</h1>
            <button className="logout-button" onClick={handleLogout}>Logout</button>
          </header>
          
          <div className="dashboard-content">
            {/* Total Visitors Card */}
            <div className="dashboard-card">
              <div className="card-content">
                <div className="card-info">
                  <p className="card-label">Total Visitors</p>
                  <h2 className="card-value">{data.visites}</h2>
                </div>
                <div className="card-icon card-icon-blue">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
              </div>
            </div>
            
            {/* Pool Started Card */}
            <div className="dashboard-card">
              <div className="card-content">
                <div className="card-info">
                  <p className="card-label">Pool Started</p>
                  <h2 className="card-value">{data.start_pool}</h2>
                </div>
                <div className="card-icon card-icon-green">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                  </svg>
                </div>
              </div>
            </div>
            
            {/* Pool Finished Card */}
            <div className="dashboard-card">
              <div className="card-content">
                <div className="card-info">
                  <p className="card-label">Pool Finished</p>
                  <h2 className="card-value">{data.finish_pool}</h2>
                  <p className="card-subtext">Of Visitors Finish The Pool</p>
                </div>
                <div className="card-icon card-icon-purple">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        // Login Page
        <div className="login-container">
          <form className="form" onSubmit={handleLogin}>
            <p id="heading">Admin Login</p>
            
            {error && <p className="error">{error}</p>}
            
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
      )}
    </div>
  );
};

export default AdminPage;
