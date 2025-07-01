import { useState, useEffect } from 'react';
import { URL_CLIENTES } from '../../../Constants/endpoints';
import axios from 'axios';
import { Card, Spinner, Alert } from "react-bootstrap";

const ViewClient = ({ id }) => {
    //se recibe el id como prop
    
    const [cliente, setCliente] = useState(null);

    useEffect(() => {
        if (!id) return;

        const getClient = async () => {
            try {
                const response = await axios.get(`${URL_CLIENTES}/${id}`);
                setCliente(response.data);
            } catch (error) {
                console.error("Error al obtener el cliente:", error);
            }
        };
        getClient();
    }, [id]);

    if (!cliente) return <p>Cargando cliente...</p>;

    return (
        <>
            <Card className="m-4 p-4 shadow">
                <Card.Body>
                    <Card.Title className="mb-3">{cliente.nombre}</Card.Title>
                    <Card.Text><strong>DNI:</strong> {cliente.dni}</Card.Text>
                    <Card.Text><strong>Dirección:</strong> {cliente.direccion}</Card.Text>
                    <Card.Text><strong>Celular:</strong> {cliente.celular}</Card.Text>
                    <Card.Text><strong>Email:</strong> {cliente.email}</Card.Text>
                    {cliente.mascotas && cliente.mascotas.length > 0 && cliente.mascotas[0].nombre !== "" ? (
                        <>
                            <hr />
                            <h5>Mascotas</h5>
                            <ul>
                            {cliente.mascotas
                                .filter((m) => m.nombre && m.nombre.trim() !== "")
                                .map((m) => (
                                    <li key={m.id}>
                                        <strong>{m.nombre}</strong> — {m.especie} ({m.raza}), {m.edad} años, {m.sexo}.
                                    </li>
                                ))
                            }
                            </ul>
                        </>
                        ) : (
                        <p className="mt-3"><em>Este cliente no tiene mascotas registradas.</em></p>
                    )}
                </Card.Body>
            </Card>
        </>
    );
};

export default ViewClient;