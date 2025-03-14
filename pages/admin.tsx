import React, { useState, useEffect } from 'react';
import './AnalyticsDashboard.css'; // Ensure this file exists
import { useRouter } from 'next/router';

// Define the props type
type CountersType = {
  visits: number;
  startedPoll: number;
  finishedPoll: number;
};

function AnalyticsDashboard() {
  const router = useRouter();
  const [counters, setCounters] = useState<CountersType>({
    visits: 0,
    startedPoll: 0,
    finishedPoll: 0,
  });

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (!token) {
      router.push('/adminlogin');
      return;
    }

    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    };

    const fetchData = async () => {
      try {
        // Verify authentication
        const authRes = await fetch('/api/auth/check', { method: 'GET', headers });
        if (!authRes.ok) throw new Error('Authentication failed');

        // Fetch analytics data
        const res = await fetch('/api/get-counters', { headers });
        if (!res.ok) throw new Error('Failed to fetch counters');

        const data = await res.json();
        setCounters(data);
      } catch (error) {
        console.error('Error:', error);
        router.push('/adminlogin');
      }
    };

    fetchData();
  }, [router]); // Ensure `router` is included in dependencies

  return (
    <div className="dashboard-container">
      <div className="dashboard-content">
        {/* Total Visitors Card */}
        <div className="dashboard-card">
          <div className="card-content">
            <div className="card-info">
              <p className="card-label">Total Visitors</p>
              <h2 className="card-value">{counters.visits}</h2>
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

        {/* Total Prompts Card */}
        <div className="dashboard-card">
          <div className="card-content">
            <div className="card-info">
              <p className="card-label">Pool Started</p>
              <h2 className="card-value">{counters.startedPoll}</h2>
            </div>
            <div className="card-icon card-icon-green">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
              </svg>
            </div>
          </div>
        </div>

        {/* Conversion Rate Card */}
        <div className="dashboard-card">
          <div className="card-content">
            <div className="card-info">
              <p className="card-label">Pool Finished</p>
              <h2 className="card-value">{counters.finishedPoll}</h2>
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
  );
}

export default AnalyticsDashboard;
