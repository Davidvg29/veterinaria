import Card from 'react-bootstrap/Card';
import cardCliente from '../assets/cardCliente.png'
import cardProducto from '../assets/cardProducto.png'

import { Link } from 'react-router-dom'

const MainAdministrator = () => {
   
    return (
        <div className="d-flex justify-content-center align-items-center flex-wrap p-4" style={{ minHeight: '100vh' }}>
            <Link to="/administrator/clientes" className="text-decoration-none d-block">
                <Card style={{ maxWidth: '300px' }} className="mx-3 my-2">
                <Card.Img variant="top" src={cardCliente} />
                <Card.Body>
                    <Card.Title>Clientes</Card.Title>
                    <Card.Text>
                    Administrá todos tus clientes desde aquí.
                    </Card.Text>
                </Card.Body>
                </Card>
            </Link>

            <Link to="/administrator/productos" className="text-decoration-none d-block">
                <Card style={{ maxWidth: '300px' }} className="mx-3 my-2">
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

    )
}

export default MainAdministrator