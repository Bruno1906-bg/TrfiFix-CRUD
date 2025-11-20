import "./LoginForm.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import background from '../assets/background.png';

export function LoginForm() {
  const navigate = useNavigate();
  const [rol, setRol] = useState("cliente");
  const [showModal, setShowModal] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    localStorage.setItem("rol", rol);
    setShowModal(true);
  };

  const handleRegisterData = (e) => {
    e.preventDefault();
    setShowModal(false);
    navigate("/dashboard");
  };

  return (
    <div className="fondo" style={{ backgroundImage: `url(${background})` }}>
      <section className="Formulario">
        <h1>Iniciar Sesión</h1>
        <form onSubmit={handleLogin}>
          <div className="usuariocontraseña">
            <FaUserCircle className="icono" />
            <input type="text" placeholder="Usuario" required />
          </div>
          <div className="usuariocontraseña">
            <RiLockPasswordFill className="icono" />
            <input type="password" placeholder="Contraseña" required />
          </div>

          {/* Selector de rol */}
          <div className="selector-rol">
            <label>Selecciona tu rol:</label>
            <select value={rol} onChange={(e) => setRol(e.target.value)}>
              <option value="cliente">Cliente</option>
              <option value="administrador">Administrador</option>
              <option value="tecnico">Técnico</option>
            </select>
          </div>

          <button type="submit">Iniciar</button>
        </form>
      </section>

      {/* Modal dinámico según rol */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Registrar Datos de {rol.charAt(0).toUpperCase() + rol.slice(1)}</h2>
            <form onSubmit={handleRegisterData}>
              {rol === "cliente" && (
                <>
                  <input type="text" placeholder="Nombre completo" required />
                  <input type="email" placeholder="Correo electrónico" required />
                  <input type="tel" placeholder="Teléfono" required />
                  <input type="text" placeholder="Dirección" required />
                </>
              )}

              {rol === "administrador" && (
                <>
                  <input type="text" placeholder="Nombre completo" required />
                  <input type="email" placeholder="Correo corporativo" required />
                  <input type="text" placeholder="Departamento" required />
                  <input type="text" placeholder="Nivel de acceso" required />
                </>
              )}

              {rol === "tecnico" && (
                <>
                  <input type="text" placeholder="Nombre completo" required />
                  <input type="email" placeholder="Correo electrónico" required />
                  <input type="text" placeholder="Especialidad técnica" required />
                  <input type="text" placeholder="Número de empleado" required />
                </>
              )}

              <button type="submit">Guardar y continuar</button>
              <button type="button" onClick={() => setShowModal(false)}>Cancelar</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
