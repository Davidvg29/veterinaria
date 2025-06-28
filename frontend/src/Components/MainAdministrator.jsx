import Card from 'react-bootstrap/Card';
import cardCliente from '../assets/cardCliente.png'
import cardProducto from '../assets/cardProducto.png'

import { Link } from 'react-router-dom'

const MainAdministrator = () => {
   
    return (
        <>
            <div className='d-flex flex-wrap  justify-content-center align-items-center'>

                <Link to="/administrator/clientes">
                    <Card style={{ width: '18rem' }} className="mx-3 my-2">
                        <Card.Img variant="top" src={cardCliente} />
                        <Card.Body>
                            <Card.Title>Clientes</Card.Title>
                            <Card.Text>
                                Administrá todos tus clientes desde aquí.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Link>
                <Link to="/administrator/productos">
                    <Card style={{ width: '18rem' }} className="mx-3 my-2">
                        <Card.Img variant="top" src={cardProducto} />
                        <Card.Body>
                            <Card.Title>Productos</Card.Title>
                            <Card.Text>
                                Administrá todos tus productos desde aquí
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Link>


            </div>
           
        </>
    )
}

export default MainAdministrator