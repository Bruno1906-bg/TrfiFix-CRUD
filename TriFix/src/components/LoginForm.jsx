import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginForm.css';

export function LoginForm() {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [contraseña, setContraseña] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const userData = {
      nombre,
      correo,
      contraseña,
    };

    localStorage.setItem('perfilUsuario', JSON.stringify(userData));
    navigate('/dashboard');
  };

  return (
    <div className="fondo">
      <div className="Formulario">
        <h1>Iniciar Sesión</h1>
        <form onSubmit={handleSubmit}>
          <div className="usuariocontraseña">
            <span className="icono"></span>
            <input
              type="text"
              placeholder="Nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              required
            />
          </div>

          <div className="usuariocontraseña">
            <span className="icono"></span>
            <input
              type="email"
              placeholder="Correo"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
              required
            />
          </div>

          <div className="usuariocontraseña">
            <span className="icono"></span>
            <input
              type="password"
              placeholder="Contraseña"
              value={contraseña}
              onChange={(e) => setContraseña(e.target.value)}
              required
            />
          </div>

          <button type="submit">Entrar</button>

          <div className="link">
            ¿No tienes cuenta? <a href="#">Regístrate</a>
          </div>
        </form>
      </div>
    </div>
  );
}
