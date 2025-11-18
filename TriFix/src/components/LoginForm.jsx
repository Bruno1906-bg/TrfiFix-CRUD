import "./LoginForm.css";
import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";

export function LoginForm() {
  return (
    <section className="Formulario">
      <h1>Iniciar Sesión</h1>
      <div className="usuariocontraseña">
        <FaUserCircle className="icono" />
        <input type="text" placeholder="Usuario" required />
      </div>
      <div className="usuariocontraseña">
        <RiLockPasswordFill className="icono" />
        <input type="password" placeholder="Contraseña" required />
      </div>
      <div className="recordar-contra">
        <label>
          <input type="checkbox" /> Recordar contraseña
        </label>
        <a href="#">Olvidaste tu contraseña?</a>
      </div>
      <button type="submit">Iniciar</button>
      <div className="link">
        <p>
          Aun no tienes una cuenta? <a href="#">Regístrate</a>
        </p>
      </div>
    </section>
  );
}
