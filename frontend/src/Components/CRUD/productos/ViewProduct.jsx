import { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import { URL_PRODUCTOS } from '../../../Constants/endpoints';
import axios from 'axios';

const ViewProducto = () => {
    const [productos, setProductos] = useState([]);
    const [busqueda, setBusqueda] = useState("");

    useEffect(() => {
        cargarProductos();
    }, []);

    const cargarProductos = async () => {
        try {
            const response = await axios.get(URL_PRODUCTOS);
            console.log("PRODUCTOS CARGADOS:", response.data);
            setProductos(response.data)
        } catch (error) {
            console.error("Error al cargar los productos:", error);
        }
    }

    const productosFiltrados = productos.filter((producto) => 
        producto.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
        producto.codigo.toString().includes(busqueda)
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
                            <th>Codigo</th>
                            <th>Categoria</th>
                            <th>Animal</th>
                            <th>Precio</th>
                            <th>Stock</th>
                        </tr>
                    </thead>
                    <tbody>
                        {productosFiltrados.length > 0 ? (
                            productosFiltrados.map((producto) => (
                                <tr key={producto.id}>
                                    <td>{producto.nombre}</td>
                                    <td>{producto.codigo}</td>
                                    <td>{producto.categoria}</td>
                                    <td>{producto.animal}</td>
                                    <td>{producto.precio}</td>
                                    <td>{producto.stock}</td>
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

export default ViewProducto