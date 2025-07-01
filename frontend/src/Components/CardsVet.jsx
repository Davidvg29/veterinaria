import Card from 'react-bootstrap/Card';
import card6 from "../assets/card6.svg";
import imgvet1 from "../assets/imgvet1.svg";
import imgvet2 from "../assets/imgvet2.svg";
import imgvet3 from "../assets/imgvet3.svg";
import imgvet4 from "../assets/imgvet4.svg";

function CardsVet() {

    const card = [
        {
            id: 1,
            img : imgvet1,
            titulo: "ANA PEDRAZA",
            mp: "MP 24.510",
            descripcion: "Especialista en medicina general y cuidados preventivos en animales."
        },
        {
            id: 2,
            img: imgvet2,
            titulo: "JOAQUIN DIAZ",
            mp: "MP 51.254",
            descripcion: "Experto en cirugía veterinaria y tratamientos de emergencia."
        },

        {
            id: 3,
            img: imgvet3,
            titulo: "LAURA CASTILLO",
            mp:"MP 51.245",
            descripcion: "Profesional en salud animal con enfoque en nutrición y bienestar."
        },

        {
            id: 4,
            img: imgvet4,
            titulo: "JUANA MORALES",
            mp: "MP 12.365",
            descripcion: "Veterinario clínico con experiencia en animales exóticos y silvestres."
        }
    ]
    return (
    <div className='d-flex flex-column justify-content-center align-items-center w-100 mb-5' style={{ minHeight: '100vh'}}>
        <h1 style={{
                        fontFamily: 'Segoe UI, sans-serif',
                        fontSize: '2.8rem',
                        fontWeight: '700',
                        color: "rgba(24, 24, 24, 0.74)",
                        textAlign: 'center',
                        marginBottom: '2rem'
                    }}>Nuestros Profesionales</h1>
        <br/>
        <br/>
        <div className='d-flex flex-wrap justify-content-center align-items-center'>
        {card.map((carta)=> (
            <Card key={carta.id} className= 'm-1'style={{ width: '18rem' }}>
      {carta.img && <Card.Img variant="top" src={carta.img} />}
      <Card.Body>
        <Card.Title className="d-flex justify-content-center">{carta.titulo}</Card.Title>
        <Card.Text className="d-flex justify-content-center">{carta.mp}</Card.Text>
        <Card.Text className="d-flex justify-content-center">{carta.descripcion}</Card.Text>
      </Card.Body>
    </Card>
        ) )}
        </div>
    </div>
  );
}

export default CardsVet;