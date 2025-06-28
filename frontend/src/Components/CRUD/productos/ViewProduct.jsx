import { useState, useEffect } from 'react';
import { URL_PRODUCTOS } from '../../../Constants/endpoints';
import axios from 'axios';
import { Card, Spinner, Alert } from "react-bootstrap";

const ViewProduct = ({id}) => {
    //se recibe el id como prop
    
    const [producto,setProducto] = useState(null);

    useEffect(()=>{
        if(!id) return;

        const getProducto = async () =>{ 
            try {
                const response=await axios.get(`${URL_PRODUCTOS}/${id}`);
                setProducto(response.data);
            } catch (error) {
                console.error("Error al obtener el producto:",error);
            }
        };
        getProducto();
    },[id])

    if (!producto) return <p>Cargando producto...</p>;

    return (
        <>
            <Card className="m-4 p-4 shadow">
                <Card.Body>
                    <Card.Title className="mb-3">{producto.nombre}</Card.Title>
                    <Card.Text><strong>Codigo:</strong> {producto.codigo}</Card.Text>
                    <Card.Text><strong>Categoria:</strong> {producto.categoria}</Card.Text>
                    <Card.Text><strong>Animal:</strong> {producto.animal}</Card.Text>
                    <Card.Text><strong>Precio:</strong> {producto.precio}</Card.Text>
                    <Card.Text><strong>Stock:</strong> {producto.stock}</Card.Text>

                </Card.Body>
            </Card>

        </>
    )
}

export default ViewProduct