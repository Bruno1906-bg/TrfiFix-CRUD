import './Muro.css';
import aguaImg from '../assets/agua.jpeg';
import lamparaImg from '../assets/lampara.webp';
import aireImg from '../assets/aireacondicionado.jpeg';


export function Muro() {
  const peticiones = [
    {
      prioridad: 'alta',
      texto: 'No Hay Agua En Los Sanitarios Y Hay Tuberías Que Presentan Fugas.',
      usuario: 'Jsthedot2025',
      rol: 'Cliente',
      img: aguaImg,
    },
    {
      prioridad: 'media',
      texto: 'Una Lampara En El Salon De Clases D208 No Funciona.',
      usuario: 'LustHeir47',
      rol: 'Cliente',
      img: lamparaImg,
    },
    {
      prioridad: 'baja',
      texto: 'El Aire Acondicionado No Funciona Correctamente.',
      usuario: 'Oscar-Mon32',
      rol: 'Cliente',
      img: aireImg,
    },
  ];

  return (
    <section className="muro-peticiones">
      <h2>Dashboard principal</h2>
      <div className="peticiones-row">
        {peticiones.map((p, i) => (
          <div key={i} className={`peticion ${p.prioridad}`}>
            {p.img && <img src={p.img} alt="Imagen del reporte" />}
            <strong>Prioridad {p.prioridad.toUpperCase()}</strong>
            <p>{p.texto}</p>
            <span>Usuario: {p.usuario} | Rol: {p.rol}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
