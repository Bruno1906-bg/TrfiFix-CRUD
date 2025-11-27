import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginForm.css';

export function LoginForm() {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [contraseña, setContraseña] = useState('');
  const [mostrarPerfil, setMostrarPerfil] = useState(false);
  const [perfilUsuario, setPerfilUsuario] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = { nombre, correo, contraseña };

    try {
      const response = await fetch('http://localhost:4000/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        const perfil = { nombre, correo };
        localStorage.setItem('perfilUsuario', JSON.stringify(perfil));
        setPerfilUsuario(perfil);
        setMostrarPerfil(true);
        navigate('/dashboard');
      } else {
        const errorText = await response.text();
        alert(`Error al registrar usuario: ${errorText}`);
      }
    } catch (error) {
      console.error('Error de conexión:', error);
      alert('No se pudo conectar con el servidor');
    }
  };

  useEffect(() => {
    const perfilGuardado = localStorage.getItem('perfilUsuario');
    if (perfilGuardado) {
      setPerfilUsuario(JSON.parse(perfilGuardado));
    }
  }, []);

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

      {mostrarPerfil && perfilUsuario && (
        <div className="mi-perfil-modal">
          <h2>Mi Perfil</h2>
          <p><strong>Usuario:</strong> {perfilUsuario.nombre}</p>
          <p><strong>Correo:</strong> {perfilUsuario.correo}</p>
          <div className="botones-perfil">
            <button onClick={() => setMostrarPerfil(false)}>Cerrar</button>
            <button>Editar perfil</button>
            <button>Eliminar perfil</button>
          </div>
        </div>
      )}
    </div>
  );
}
