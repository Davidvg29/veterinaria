import { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import { URL_CLIENTES } from '../../../Constants/endpoints';
import axios from 'axios';
import FormClient from './FormClient';
import EditClient from './EditClient';
import DeleteClient from './DeleteClient';

const ViewClient = () => {
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
        editClient: "Editar Clientes",
        deleteClient:"Eliminar Clientes",


    };

    const [clientes, setClientes] = useState([]);
    const [busqueda, setBusqueda] = useState("");

    useEffect(() => {
        cargarClientes();
    }, []);

    const cargarClientes = async () => {
        try {
            const response = await axios.get(URL_CLIENTES);
            console.log("CLIENTES CARGADOS:", response.data);
            setClientes(response.data)
        } catch (error) {
            console.error("Error al cargar los clientes:", error);
        }
    }

    const clientesFiltrados = clientes.filter((cliente) =>
        cliente.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
        cliente.dni.toString().includes(busqueda)
    );

    return (
        <>
            <div className="w-100">
                <Form.Control
                    type="text"
                    placeholder="Buscar por nombre o DNI"
                    className="mb-3"
                    value={busqueda}
                    onChange={(e) => setBusqueda(e.target.value)}
                />

                <Table striped bordered hover responsive size="sm">
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>DNI</th>
                            <th>Dirección</th>
                            <th>Celular</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {clientesFiltrados.length > 0 ? (
                            clientesFiltrados.map((cliente) => (
                                <tr key={cliente.id}>
                                    <td>{cliente.nombre}</td>
                                    <td>{cliente.dni}</td>
                                    <td>{cliente.direccion}</td>
                                    <td>{cliente.celular}</td>
                                    <td>{cliente.email}</td>
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
            {/* <Modal show={showModal} onHide={handleCloseModal} size='lg' centered>
                <Modal.Header closeButton>
                    <Modal.Title>{TITULOS[fromType]}</Modal.Title>
                </Modal.Header>
                <Modal.Body className="d-flex justify-content-center " >
                    {fromType === "cliente" && <FormClient />}
                    {fromType === "editClient" && <EditClient/>}
                    {fromType === "deleteClient" && <DeleteClient/>}

                </Modal.Body>


            </Modal> */}
        </>
    )
}

export default ViewClient