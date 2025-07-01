import { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import { URL_CLIENTES } from '../../../Constants/endpoints';
import axios from 'axios';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/esm/Button';
import FormClient from './FormClient';
import ViewClient from './ViewClient';
import EditClient from './EditClient';
import FormMascota from './FormMascota';

const MainCliente = () => {
    //state de clientes
    const [clientes, setClientes] = useState([]);
    const [clienteId, setClienteId] = useState(null);

    //state de busqueda
    const [busqueda, setBusqueda] = useState("");

    //state de la modal 
    const [showModal, setShowModal] = useState(false);
    const [fromType, setFromType] = useState("");


    //funcion de apertura modal
    const handleOpenModal = (type, id = null) => {
        setFromType(type);
        setClienteId(id);
        setShowModal(true);
    };

    //funcion de cierre de la modal
    const handleCloseModal = (type) => {
        setShowModal(false);
        setFromType("");
    };

    const TITULOS = {
        client: "Nuevo Cliente",
        viewClient: "Ver Cliente",
        editClient: "Editar Clientes",
    };



    const cargarClientes = async () => {
        try {
            const response = await axios.get(URL_CLIENTES);
            console.log("CLIENTES CARGADOS:", response.data);
            setClientes(response.data)
        } catch (error) {
            console.error("Error al cargar los clientes:", error);
        }
    }

    const getClient = async () => {
        try {
            const response = await axios.get(`${URL_CLIENTES}/${id}`);
            setClientes(response.data);
        } catch (error) {
            console.error("Error al obtener el cliente:", error);
        }
    }

    useEffect(() => {
        cargarClientes();
    }, []);
    const clientesFiltrados = clientes.filter((cliente) =>
        cliente.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
        cliente.dni.toString().includes(busqueda)
    );

    const borrar = async (id) => {
        try {
            if (confirm("Estas seguro que deseas eliminar este cliente ")) {
                await axios.delete(`${URL_CLIENTES}/${id}`);
                cargarClientes();// Actualiza la lista de clientes después de eliminar
            }
        } catch (error) {
            console.error("Error al eliminar el cliente:", error);
        }
    }

    return (
        <>
            <div className="w-100 d-flex justify-content-center align-items-center flex-column mb-5">
                <div className=' d-flex justify-content-center align-items-center m-3 w-75' >
                    <Form.Control
                        type="text"
                        placeholder="Buscar por nombre o DNI"
                        className=" w-50 mx-3"
                        style={{ width: '700px' }}
                        value={busqueda}
                        onChange={(e) => setBusqueda(e.target.value)}
                    />
                    <Button variant="light" style={{ backgroundColor: "rgba(63, 3, 175, 0.5)", color: "#fff" }} onClick={() => handleOpenModal("client")} >Crear un nuevo Cliente</Button>

                </div>


                <Table striped bordered hover responsive className='' style={{ width: '700px' }}>
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>DNI</th>
                        </tr>
                    </thead>
                    <tbody>
                        {clientesFiltrados.length > 0 ? (
                            clientesFiltrados.map((cliente) => (
                                <tr key={cliente.id}>
                                    <td>{cliente.nombre}</td>
                                    <td>{cliente.dni}</td>
                                    <td>
                                        <Button className='w-100' size="sm" variant='primary' onClick={() => handleOpenModal("viewClient", cliente.id)}>Ver</Button>
                                    </td>
                                    <td className="text-center">
                                        <Button className='w-100' size="sm" variant="warning" onClick={() => handleOpenModal("editClient", cliente.id)} >Editar</Button>
                                    </td>
                                
                                    <td className="text-center">
                                        <Button className='w-100' size="sm" variant="danger" onClick={() => { borrar(cliente.id) }} >Eliminar</Button>
                                    </td>
                                     <td className="text-center">
                                        <Button className="w-100" size="sm" variant="success"onClick={() => handleOpenModal("addPet", cliente.id)} >Agregar Mascota</Button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="5" className="text-center">
                                    No se encontraron clientes.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </Table>
            </div>
            <Modal show={showModal} onHide={handleCloseModal} size='lg' centered>
                <Modal.Header closeButton>
                    <Modal.Title>{TITULOS[fromType]}</Modal.Title>
                </Modal.Header>
                <Modal.Body className="d-flex justify-content-center " >
                    {fromType === "client" && <FormClient onClose={handleCloseModal} onUpdated={cargarClientes} />}
                    {fromType === "viewClient" && <ViewClient id={clienteId} />}{/*paso el id por prop */}
                    {fromType === "editClient" && <EditClient id={clienteId} onClose={handleCloseModal} onUpdated={cargarClientes} />}
                    {fromType === "addPet" && <FormMascota clienteId={clienteId} onClose={handleCloseModal} onUpdated={cargarClientes} />}
                </Modal.Body>


            </Modal>

        </>
    )
}

export default MainCliente