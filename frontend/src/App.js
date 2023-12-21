import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [message, setMessage] = useState('Loading...');

  useEffect(() => {
    // Fetching data from the Java server's multi-threaded endpoint
    fetch('http://localhost:8080/multithreaded')
      .then(response => response.text())
      .then(data => {
        setMessage(data);
      })
      .catch(err => {
        console.error("Error fetching data: ", err);
        setMessage('Failed to load message from server.');
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Server Response: {message}
        </p>
      </header>
    </div>
  );
}

export default App;
