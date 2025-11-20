import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { LoginForm } from './components/LoginForm';
import { Muro } from './components/Muro';
import { WelcomeBanner } from './components/Bienvenida';

function Dashboard() {
  const [showProfile, setShowProfile] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState(false);
  const navigate = useNavigate();

  const perfilUsuario = JSON.parse(localStorage.getItem('perfilUsuario')) || {};
  const [nombreEditado, setNombreEditado] = useState(perfilUsuario.nombre || '');
  const [correoEditado, setCorreoEditado] = useState(perfilUsuario.correo || '');

  const guardarCambios = () => {
    const nuevosDatos = {
      nombre: nombreEditado,
      correo: correoEditado,
    };
    localStorage.setItem('perfilUsuario', JSON.stringify(nuevosDatos));
    setEditMode(false);
    setShowProfile(false);
  };

  const eliminarPerfil = () => {
    localStorage.removeItem('perfilUsuario');
    setConfirmDelete(false);
    setShowProfile(false);
    setEditMode(false);
    navigate('/');
  };

  return (
    <div className="dashboard-layout fade-in">
      <aside className="sidebar">
        <div className="logo-container">
          <img src="/TriFixLogo.png" alt="TriFix Logo" className="sidebar-logo" />
        </div>
        <nav>
          <ul>
            <li onClick={() => setShowProfile(true)}>Mi perfil</li>
            <li>Amigos</li>
            <li>Configuración</li>
            <li>Cerrar sesión</li>
          </ul>
        </nav>
      </aside>

      <main className="dashboard-content">
        <WelcomeBanner />
        <Muro />
      </main>

      {showProfile && (
        <div className="modal-overlay" onClick={() => { setShowProfile(false); setEditMode(false); setConfirmDelete(false); }}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <h2>Mi Perfil</h2>

            {!editMode ? (
              <>
                <p><strong>Usuario:</strong> {perfilUsuario.nombre}</p>
                <p><strong>Correo:</strong> {perfilUsuario.correo}</p>
                <div className="modal-buttons">
                  <button type="button" className="modal-btn" onClick={() => setShowProfile(false)}>Cerrar</button>
                  <button type="button" className="modal-btn" onClick={() => setEditMode(true)}>Editar perfil</button>
                  <button type="button" className="modal-btn delete-btn" onClick={() => setConfirmDelete(true)}>Eliminar perfil</button>
                </div>
              </>
            ) : (
              <>
                <form onSubmit={(e) => { e.preventDefault(); guardarCambios(); }}>
                  <input
                    type="text"
                    value={nombreEditado}
                    onChange={(e) => setNombreEditado(e.target.value)}
                    placeholder="Nombre"
                    required
                  />
                  <input
                    type="email"
                    value={correoEditado}
                    onChange={(e) => setCorreoEditado(e.target.value)}
                    placeholder="Correo"
                    required
                  />
                  <div className="modal-buttons">
                    <button type="submit" className="modal-btn">Guardar</button>
                    <button type="button" className="modal-btn" onClick={() => setEditMode(false)}>Cancelar</button>
                  </div>
                </form>
              </>
            )}

            {confirmDelete && (
              <div style={{ marginTop: '20px', background: '#f8d7da', padding: '15px', borderRadius: '8px' }}>
                <p style={{ marginBottom: '10px', color: '#721c24' }}>
                  ¿Estás seguro que quieres eliminar tu perfil?
                </p>
                <div className="modal-buttons">
                  <button type="button" className="modal-btn delete-btn" onClick={eliminarPerfil}>Confirmar</button>
                  <button type="button" className="modal-btn" onClick={() => setConfirmDelete(false)}>Cancelar</button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
