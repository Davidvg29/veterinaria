import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState, useEffect } from 'react';
import axios from "axios";
import { URL_PRODUCTOS } from '../../../Constants/endpoints';
import validationFormProduct from '../../../validations/validationsFormProduct';

function Formulario({onClose, onUpdate}) {

    const initialState = {
        nombre: "",
        codigo:"",
        categoria: "",
        animal: "",
        precio: "",
        stock: "",
    };
    const [formData, setFormdata] = useState(initialState);


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormdata({
            ...formData,
            
            [name]: (name === "precio" || name === "stock") ? Number(value) : value,
        });
    };


    const handleSubmit = async (e) => {
        e.preventDefault();

        const validation = validationFormProduct(formData);
        if (validation.length != 0) {
            return alert(validation)
        }

        try {
            const response = await axios.post(URL_PRODUCTOS, formData);
            alert("Producto guardado con éxito");
            
            
            //para resetear el formulario
            setFormdata(initialState);
            if(response){
                onUpdate();
                onClose();
            }
            console.log(formData);
        } catch (error) {
            console.error("Error al guardar el Producto", error);
        }



    };

    return (
        <div className="bg-white p-4 rounded-3 shadow text-dark w-100 ">
            <h3 className="text-center mb-4">Formulario de Productos</h3>
            <Form onSubmit={handleSubmit} className='px-5' >
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="nombre" name="nombre" placeholder="Royal Canin Urinary" value={formData.nombre} onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Codigo</Form.Label>
                    <Form.Control type="codigo" name="codigo" placeholder="00001" value={formData.codigo} onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Categoria</Form.Label>
                    <Form.Control type="categoria" name="categoria" placeholder="Alimento Balanceado" value={formData.categoria} onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Animal</Form.Label>
                    <Form.Control type="animal" name="animal" placeholder="Perro" value={formData.animal} onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Precio</Form.Label>
                    <Form.Control type="number" step="0.01" min="0" name="precio" placeholder="$1000.00" value={formData.precio} onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Stock</Form.Label>
                    <Form.Control type="number" step="1" name="stock" placeholder="20" value={formData.stock} onChange={handleChange} />
                </Form.Group>

                <div className=" text-end mt3">
                    <Button className="m-2" variant="danger" onClick={onClose}>
                        Cancelar
                    </Button>

                    <Button type="submit" variant="primary">Guardar</Button>

                </div>

            </Form>
        </div>
    );
}

export default Formulario;