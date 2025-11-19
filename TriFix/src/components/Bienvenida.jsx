import './Bienvenida.css';

export function WelcomeBanner() {
  return (
    <section className="bienvenido">
      <h1>Bienvenido al dashboard</h1>
      <p className='info'>Comienza a reportar los problemas que afectan tu entorno de forma rápida y sencilla.</p>
      <button>Subir ahora!</button>
    </section>
  );
}
