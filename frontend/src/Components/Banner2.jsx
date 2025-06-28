import img from "../assets/Banner2.png"; // Asegúrate de que la ruta sea correcta

const Banner2 = () => {
  return (
    <div className="d-flex justify-content-end"> 
      <img className="d-flex justify-content-end" src={img} alt="ATENDEMOS LAS 24HS"
        style={{ maxWidth: '50%', height: '50%' }}
      />
      <p  className="d-flex justify-content-end align-items-center" style={{
        fontSize: '1.4em',       
        fontWeight: 'bold',      
        color: '#333',          
        lineHeight: '1.5',     
        textAlign: 'justify',    

        
        border: '2px solid #8A2BE2', 
        padding: '20px',           
        borderRadius: '8px',       
        backgroundColor: '#e6f2ff',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Sombra suave para darle profundidad (opcional)
        // --- FIN ESTILOS PARA EL MARCO ---

        // Asegura que el párrafo no tenga márgenes por defecto que afecten el layout
        margin: '0',
        flexGrow: 1 // Permite que el párrafo ocupe el espacio restante en flexbox
      }}>
        Somos VET SOFT, con más de 20 años de trayectoria en el rubro. Contamos con un gran equipo ; disponibles para asesorarte cuando lo necesites. Servicio de urgencias disponible todo el día, con cirujanos altamente capacitados y quirófanos de última tecnología. Realizamos todo tipo de intervenciones con estándares internacionales.
      </p>
    </div>
  );
}

export default Banner2;