import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState, useEffect } from 'react';
import axios from "axios";
import { URL_CLIENTES } from '../../../Constants/endpoints';
import validationFormCliente from '../../../validations/validationsFormCliente';

function Formulario() {

    const initialState = {
        nombre: "",
        dni: "",
        direccion: "",
        celular: "",
        email: "",
    };
    const [formData, setFormdata] = useState(initialState);


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
            const response = await axios.post(URL_CLIENTES, formData);
            alert("Cliente guardado con éxito");

            //para resetear el formulario
            setFormdata({ initialState });

            console.log(formData);
        } catch (error) {
            console.error("Error al guardar el cliente:", error);
        }



    };

    return (
        <div className="bg-white p-4 rounded-3 shadow text-dark w-50 ">
            <h3 className="text-center mb-4">Formulario de Clientes</h3>
            <Form onSubmit={handleSubmit}  >
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="nombre" name="nombre" placeholder="Nombre" value={formData.nombre} onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>DNI</Form.Label>
                    <Form.Control type="dni" name="dni" placeholder="DNI" value={formData.dni} onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Direccion</Form.Label>
                    <Form.Control type="direccion" name="direccion" placeholder="Direccion" value={formData.direccion} onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Celular</Form.Label>
                    <Form.Control type="celular" name="celular" placeholder="Celular" value={formData.celular} onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
                </Form.Group>

                <div className=" text-end mt3">
                    <Button className="m-2" variant="danger" onClick={() => setFormdata(initialState)}>
                        Cancelar
                    </Button>

                    <Button type="submit" variant="primary">Guardar</Button>

                </div>

            </Form>
        </div>
    );
}

export default Formulario;