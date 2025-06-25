import { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import { URL_CLIENTES } from '../../../Constants/endpoints';
import axios from 'axios';
import Button from 'react-bootstrap/esm/Button';

const EditClient = () => {
    const [clientes, setClientes] = useState([]);
    const [busqueda, setBusqueda] = useState("");

    useEffect(() => {
        cargarCliente();
    }, []);

    const cargarCliente = async () => {
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
                    placeholder="Buscar por nombre o codigo"
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
                                    <td className="text-center">
                                        <Button variant="warning" size="sm" >
                                            Editar
                                        </Button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="5" className="text-center">
                                    No se encontraron productos.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </Table>
            </div>
        </>
    )
}

export default EditClient