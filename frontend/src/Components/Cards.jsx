import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import card1 from "../assets/card1.svg";
import card2 from "../assets/card2.svg";
import card3 from "../assets/card3.svg";
import card4 from "../assets/card4.svg";
import card5 from "../assets/card5.svg";

function Cards() {

    const card = [
        {
            id: 1,
            img : card1,
            titulo: "ANGEL PASTRANA",
            descripcion: "Apasionado por crear experiencias digitales intuitivas y funcionales con tecnologías modernas.",
            link: "https://www.linkedin.com/in/angel-pastrana-b7856223b/"

  
        },
        {
            id: 2,
            img: card2,
            titulo: "JOAQUIN DIAZ",
            descripcion: "Especializado en desarrollo frontend, enfocado en diseño responsivo y rendimiento web.",
            link: "https://ar.linkedin.com/in/joaquin-diaz-85b420364"
        },

        {
            id: 3,
            img: card3,
            titulo: "DAVID VALDEZ GRAMAJO",
            descripcion:"Desarrollador full stack con habilidades en React, Node.js y bases de datos.",
            link: "https://www.linkedin.com/in/davidvaldezgramajo/"


        },

        {
            id: 4,
            img: card4,
            titulo: "JUAN MORA",
            descripcion: "Transformo ideas en sitios web dinámicos, accesibles y fáciles de usar.",
            link: "https://www.linkedin.com/in/juanrmoraok"


        },

        {
            id: 5,
            img: card5,
            titulo: "MARIANO CELIZ",
            descripcion: "Me gusta resolver problemas con código limpio, reutilizable y bien estructurado.",
            link: "https://www.linkedin.com/in/mariano-celiz-1b6506291"
        }
    ]

  return (
    <div className='d-flex flex-column justify-content-center align-items-center w-100'>
        <h1>SOBRE NOSOTROS</h1>
        <p>Los desarrolladores que creamos esto</p>

        <div className='d-flex flex-wrap justify-content-center align-items-center'>
        {card.map((carta)=> (
            <Card key={carta.id} className= 'm-1'style={{ width: '18rem' }}>
      {carta.img && <Card.Img variant="top" src={carta.img} />}
      <Card.Body>
        <Card.Title>{carta.titulo}</Card.Title>
        <Card.Text>{carta.descripcion}</Card.Text>
        <Button variant="outline-danger" onClick={()=> window.open(carta.link, '_blanck')}>CONTACTO</Button>
      </Card.Body>
    </Card>
        ) )}
        </div>
    </div>
  );
}

export default Cards;