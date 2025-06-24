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
        viewProducto:"Lista de Productos"
    };

    return (
        <>
            <div className='d-flex flex-wrap  justify-content-center align-items-center'>
                <Card style={{ width: '18rem' }} className="mx-3 my-2">
                    <Card.Img variant="top" src={cardCliente} />
                    <Card.Body>
                        <Card.Title>Clientes</Card.Title>
                        <Card.Text>
                            Administrá todos tus clientes desde aquí.
                        </Card.Text>
                    </Card.Body>
                    <ListGroup className="d-flex justify-content-between flex-wrap gap-2 p-2">
                        <Button size="sm" variant="success" onClick={() => handleOpenModal("cliente")} >Crear</Button>
                        <Button size="sm" variant="primary" onClick={() => handleOpenModal("viewClient")}>Ver</Button>
                        <Button size="sm" variant="warning" >Editar</Button>
                        <Button size="sm" variant="danger" >Eliminar</Button>
                    </ListGroup>
                </Card>

                <Card style={{ width: '18rem' }} className="mx-3 my-2">
                    <Card.Img variant="top" src={cardProducto} />
                    <Card.Body>
                        <Card.Title>Productos</Card.Title>
                        <Card.Text>
                            Administrá todos tus productos desde aquí
                        </Card.Text>
                    </Card.Body>
                    <ListGroup className="d-flex justify-content-between flex-wrap gap-2 p-2">
                        <Button size="sm" variant="success" onClick={() => handleOpenModal("producto")} >Crear</Button>
                        <Button size="sm" variant="primary" onClick={()=> handleOpenModal("viewProducto")}>Ver</Button>
                        <Button size="sm" variant="warning" >Editar</Button>
                        <Button size="sm" variant="danger" >Eliminar</Button>
                    </ListGroup>
                </Card>
            </div>
            <Modal show={showModal} onHide={handleCloseModal} size='lg'scrollable centered>
                <Modal.Header closeButton>
                    <Modal.Title>{TITULOS[fromType]}</Modal.Title>
                </Modal.Header>
                <Modal.Body className="d-flex justify-content-center " >
                    {fromType === "cliente" && <FormClient />}
                    {fromType === "producto" && <FromProducto />}
                    {fromType === "viewClient" && <ViewClient />}
                    {fromType === "viewProducto" && <ViewProduct/>}
                </Modal.Body>


            </Modal>
        </>
    )
}

export default MainAdministrator