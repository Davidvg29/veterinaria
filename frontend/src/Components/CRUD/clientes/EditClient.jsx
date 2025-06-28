import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState, useEffect } from 'react';
import axios from "axios";
import { URL_CLIENTES } from '../../../Constants/endpoints';
import validationFormCliente from '../../../validations/validationsFormCliente';
import {useNavigate} from 'react-router-dom';

const EditClient = ({id,onClose,onUpdated}) => {
    //state del formulario
    const [formData, setFormdata] = useState({});

    const navigate= useNavigate();

    const getClient = async () => {
        try {
            const response = await axios.get(`${URL_CLIENTES}/${id}`);
            setFormdata(response.data);
        } catch (error) {
            console.error("Error al obtener el cliente:", error);
        }
    }

    useEffect(() => {
        getClient();
    },[]);

    const handleChange = (e) => {
        setFormdata({
            ...formData,
            [e.target.name]: e.target.value
        });
    };


    const handleSubmit = async (e) => {
        e.preventDefault();

        const validation = validationFormCliente(formData);
        if (validation.length != 0) {
            return alert(validation)
        }

        try {
            const response = await axios.put(`${URL_CLIENTES}/${id}`, formData);
            alert("Cliente guardado con éxito");
            //para recargar la pagina
            onUpdated();
            //para resetear el formulario
            setFormdata({});
            //para cerrar el modal
            if(response){
                onClose();
            }

            console.log(formData);
        } catch (error) {
            console.error("Error al actualizar el cliente:", error);
        }



    };

    return (
        <div className="bg-white p-4 rounded-3 shadow text-dark w-50 ">
            <h3 className="text-center mb-4">Formulario de Clientes</h3>
            <Form onSubmit={handleSubmit}  >
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="text" name="nombre" placeholder="Nombre" value={formData.nombre ||''} onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>DNI</Form.Label>
                    <Form.Control type="text" name="dni" placeholder="DNI" value={formData.dni ||''} onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Direccion</Form.Label>
                    <Form.Control type="text" name="direccion" placeholder="Direccion" value={formData.direccion ||''} onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Celular</Form.Label>
                    <Form.Control type="text" name="celular" placeholder="Celular" value={formData.celular ||''} onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="text" name="email" placeholder="Email" value={formData.email ||''} onChange={handleChange} />
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

export default EditClient;