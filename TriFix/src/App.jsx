import React from 'react';
import './App.css';
import { LoginForm } from './components/LoginForm';
import { WelcomeBanner } from './components/Bienvenida';
import { Muro } from './components/Muro';

function App() {
  return (
    <div>
      <WelcomeBanner/>
      <Muro/>
    </div>
  );
}

export default App;
