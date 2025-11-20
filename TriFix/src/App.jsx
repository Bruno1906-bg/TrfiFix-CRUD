import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LoginForm } from './components/LoginForm';
import { Muro } from './components/Muro';
import { WelcomeBanner } from './components/Bienvenida';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route
          path="/dashboard"
          element={
            <div className="dashboard-wrapper">
              <WelcomeBanner />
              <Muro />
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
