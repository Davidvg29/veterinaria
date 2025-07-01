import Card from 'react-bootstrap/Card';
import card6 from "../assets/card6.svg";


function CardsVet() {

    const card = [
        {
            id: 1,
            img : card6,
            titulo: "JUAN PEREZ",
            mp: "MP 24.510"
        },
        {
            id: 2,
            img: card6,
            titulo: "JOAQUIN DIAZ",
            mp: "MP 51.254"
        },

        {
            id: 3,
            img: card6,
            titulo: "JORGE TORRES",
            mp:"MP 51.245"
        },

        {
            id: 4,
            img: card6,
            titulo: "JUAN MORA",
            mp: "MP 12.365"
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
      </Card.Body>
    </Card>
        ) )}
        </div>
    </div>
  );
}

export default CardsVet;