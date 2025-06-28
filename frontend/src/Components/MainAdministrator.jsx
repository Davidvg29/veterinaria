import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';


import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/esm/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import cardCliente from '../assets/cardCliente.png'
import cardProducto from '../assets/cardProducto.png'
import FormClient from './CRUD/clientes/FormClient';
import FromProducto from './CRUD/productos/FormProduct'
import ViewClient from './CRUD/clientes/ViewClient';
import ViewProduct from './CRUD/productos/ViewProduct';
import DeleteClient from './CRUD/clientes/DeleteClient';
import DeleteProduct from './CRUD/productos/DeleteProduct';
import EditClient from './CRUD/clientes/EditClient';
import { Link } from 'react-router-dom'

const MainAdministrator = () => {
    const [showModal, setShowModal] = useState(false);
    const [fromType, setFromType] = useState("");

    const handleOpenModal = (type) => {
        setFromType(type);
        setShowModal(true);
    };

    const handleCloseModal = (type) => {
        setShowModal(false);
        setFromType("");
    };

    const TITULOS = {
        cliente: "Nuevo Cliente",
        producto: "Nuevo Producto",
        viewClient: "Lista de Clientes",
        viewProducto: "Lista de Productos",
        editClient: "Editar Clientes",
        deleteClient: "Eliminar Clientes",
        deleteProduct: "Eliminar Productos"

    };

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

                {/* <ListGroup className="d-flex justify-content-between flex-wrap gap-2 p-2">
                        <Button size="sm" variant="success" onClick={() => handleOpenModal("producto")} >Crear</Button>
                        <Button size="sm" variant="primary" onClick={()=> handleOpenModal("viewProducto")}>Ver</Button>
                        <Button size="sm" variant="warning" >Editar</Button>
                        <Button size="sm" variant="danger" onClick={()=> handleOpenModal("deleteProduct")} >Eliminar</Button>
                    </ListGroup> */}

            </div>
            <Modal show={showModal} onHide={handleCloseModal} size='lg' centered>
                <Modal.Header closeButton>
                    <Modal.Title>{TITULOS[fromType]}</Modal.Title>
                </Modal.Header>
                <Modal.Body className="d-flex justify-content-center " >
                    {fromType === "cliente" && <FormClient />}
                    {fromType === "producto" && <FromProducto />}
                    {fromType === "viewClient" && <ViewClient />}
                    {fromType === "viewProducto" && <ViewProduct />}
                    {fromType === "deleteClient" && <DeleteClient />}
                    {fromType === "deleteProduct" && <DeleteProduct />}
                    {fromType === "editClient" && <EditClient />}
                </Modal.Body>


            </Modal>
        </>
    )
}

export default MainAdministrator