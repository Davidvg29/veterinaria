import { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import { URL_PRODUCTOS } from '../../../Constants/endpoints';
import axios from 'axios';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/esm/Button';
import FormProduct from './FormProduct'
import EditProduct from './EditProduct';
import ViewProduct from './ViewProduct';


const MainProducto = () => {
    //state de productos
    const [productos, setProductos] = useState([]);
    const [productoId, setProductoId] = useState(null);

    //state de busqueda
    const [busqueda, setBusqueda] = useState("");

    //state de la modal 
    const [showModal, setShowModal] = useState(false);
    const [fromType, setFromType] = useState("");


    //funcion de apertura modal
    const handleOpenModal = (type, id = null) => {
        setFromType(type);
        setProductoId(id);
        setShowModal(true);
    };

    //funcion de cierre de la modal
    const handleCloseModal = (type) => {
        setShowModal(false);
        setFromType("");
    };

    const TITULOS = {
        product: "Nuevo Producto",
        viewProduct: "Ver Producto",
        editProduct: "Editar Producto",
    };



    const cargarProductos = async () => {
        try {
            const response = await axios.get(URL_PRODUCTOS);
            console.log("PRODUCTOS CARGADOS:", response.data);
            setProductos(response.data)
        } catch (error) {
            console.error("Error al cargar los productos:", error);
        }
    }

    const getProducto = async () => {
        try {
            const response = await axios.get(`${URL_PRODUCTOS}/${id}`);
            setProductos(response.data);
        } catch (error) {
            console.error("Error al obtener el Producto:", error);
        }
    }

    useEffect(() => {
        cargarProductos();
    }, []);
    const productosFiltrados = productos.filter((producto) =>
        producto.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
        producto.codigo.toString().includes(busqueda)
    );

    const borrar = async(id) =>{
        try {
            if(confirm("Estas seguro que deseas eliminar este producto ")){
                await axios.delete(`${URL_PRODUCTOS}/${id}`);
                cargarProductos();// Actualiza la lista de productos después de eliminar
            }
        } catch (error) {
            console.error("Error al eliminar el producto:",error);
        }
    }

    return (
        <>
            <div className="w-100 d-flex justify-content-center align-items-center flex-column mb-5">
                <div className=' d-flex justify-content-center align-items-center m-3 w-75' >
                    <Form.Control
                        type="text"
                        placeholder="Buscar por nombre o codigo"
                        className="w-50 mx-3"
                        style={{width:'700px'}}
                        value={busqueda}
                        onChange={(e) => setBusqueda(e.target.value)}
                    />
                    <Button size="sm" variant="success" onClick={() => handleOpenModal("product")} >Crear un nuevo Producto</Button>

                </div>


                <Table striped bordered hover responsive size="sm" style={{width:'700px'}}>
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Codigo</th>
                        </tr>
                    </thead>
                    <tbody>
                        {productosFiltrados.length > 0 ? (
                            productosFiltrados.map((producto) => (
                                <tr key={producto.id}>
                                    <td>{producto.nombre}</td>
                                    <td>{producto.codigo}</td>
                                    <td>
                                        <Button className='w-100' size="sm" variant='primary' onClick={() => handleOpenModal("viewProduct", producto.id)}>Ver</Button>
                                    </td>
                                    <td className="text-center">
                                        <Button className='w-100' size="sm" variant="warning" onClick={() => handleOpenModal("editProduct",producto.id)} >Editar</Button>
                                    </td>
                                    <td className="text-center">
                                        <Button className='w-100' size="sm" variant="danger" onClick={() => {borrar(producto.id)}} >Eliminar</Button>
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
            <Modal show={showModal} onHide={handleCloseModal} size='lg' centered>
                <Modal.Header closeButton>
                    <Modal.Title>{TITULOS[fromType]}</Modal.Title>
                </Modal.Header>
                <Modal.Body className="d-flex justify-content-center " >
                    {fromType === "product" && <FormProduct onClose={handleCloseModal} onUpdated={cargarProductos}/>}
                    {fromType === "viewProduct" && <ViewProduct id={productoId} />}{/*paso el id por prop */}
                    {fromType === "editProduct" && <EditProduct id={productoId} onClose={handleCloseModal} onUpdated={cargarProductos}/>}
                </Modal.Body>


            </Modal>

        </>
    )
}

export default MainProducto