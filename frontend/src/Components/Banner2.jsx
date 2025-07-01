import img from "../assets/Banner2.png"; // Asegúrate de que la ruta sea correcta

const Banner2 = () => {
  return (
    <div className="d-flex flex-column flex-md-row p-5 m-0 rounded-5" style={{ alignItems: 'stretch', gap: 0}}>
  {/* Imagen */}
  <div className="me-md-3 mb-3 mb-md-0" style={{ flex: '1 1 50%' }}>
    <img
      src={img}
      alt="ATENDEMOS LAS 24HS"
      style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '0px' }}
      className="rounded-5"
    />
  </div>

  {/* Texto */}
  <div
    className="d-flex rounded-5"
    style={{
      flex: '1 1 50%',
      backgroundColor: '#e6f2ff',
      padding: '10px',
      borderRadius: '0px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      alignItems: 'center',
    }}
  >
    <p style={{
      fontSize: '1.1rem',
      fontWeight: 'bold',
      color: '#333',
      // lineHeight: '1.6',
      textAlign: 'center',
      margin: 0
    }}>
      Somos <strong>SOFT VET</strong>, con más de 20 años de trayectoria en el rubro. Contamos con un gran equipo, disponibles para asesorarte cuando lo necesites. Servicio de urgencias disponible todo el día, con cirujanos altamente capacitados y quirófanos de última tecnología. Realizamos todo tipo de intervenciones con estándares internacionales.
    </p>
  </div>
</div>
  );
}

export default Banner2;