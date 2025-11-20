import './Muro.css';
import aguaImg from '../assets/agua.jpeg';
import lamparaImg from '../assets/lampara.webp';
import aireImg from '../assets/aireacondicionado.jpeg';


export function Muro() {
  const peticiones = [
    {
      prioridad: 'alta',
      texto: 'No tengo agua en el baño y algunas tuberias presentan fugas.',
      usuario: 'Jeftegod25',
      rol: 'Cliente',
      img: aguaImg,
    },
    {
      prioridad: 'media',
      texto: 'Una lampara de mi casa no funciona y no se como instalar una.',
      usuario: 'LuisFerTable',
      rol: 'Cliente',
      img: lamparaImg,
    },
    {
      prioridad: 'baja',
      texto: 'El aire acondicionado de mi cuarto no funciona y tengo mucho calor.',
      usuario: 'OscarMoon35',
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
