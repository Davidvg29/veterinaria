import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';

function Formulario() {

    const initialState = {
        nombre: "",
        apellido: "",
        dni: "",
        direccion: "",
        celular: "",
        email: "",
    };
    const [formData, setFormdata] = useState(initialState);
    const [cliente, setCliente] = useState([]);

    const handleChange = (e) => {
        setFormdata({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const isFormValid = () => {
        return Object.values(formData).every(value => value.trim() !== '');

    };

    const handleSubmit = (e) => {
        e.preventDefault();
        //para verificar que los campos del formulario no esten vacios
        if (!isFormValid()) {
            alert("Por favor, completá todos los campos.");
            return;
        }

        console.log(formdata);

        //para resetear el formulario
        setFormdata({
            nombre: '',
            apellido: '',
            edad: ''
        });
    };

    return (
        <div className="bg-white p-4 rounded-3 shadow text-dark w-50 ">
            <Form onSubmit={handleSubmit}  >
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="nombre" name="nombre" placeholder="Nombre" value={formData.nombre} onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Apellido</Form.Label>
                    <Form.Control type="apellido" name="apellido" placeholder="Apellido" value={formData.apellido} onChange={handleChange} />
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
                    <Button className ="m-2" variant="danger"  onClick={() => setFormdata(initialState)}>
                        Cancelar
                    </Button>

                    <Button type="submit" variant="primary">Guardar</Button>

                </div>

            </Form>
        </div>
    );
}

export default Formulario;