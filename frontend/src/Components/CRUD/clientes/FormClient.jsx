import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState, useEffect } from 'react';
import axios from "axios";
import { URL_CLIENTES } from '../../../Constants/endpoints';
import validationFormCliente from '../../../validations/validationsFormCliente';

function FormClient({onClose,onUpdated}) {

    const initialState = {
        nombre: "",
        dni: "",
        direccion: "",
        celular: "",
        email: "",
    };
    const [formData, setFormdata] = useState(initialState);

    const initialMascota = {
        nombre: "",
        especie: "",
        raza: "",
        edad: "",
        sexo: ""
    };

    const [formMascota, setFormMascota] = useState(initialMascota);


    const handleChange = (e) => {
        setFormdata({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleChangeMascota = (e) => {
        setFormMascota({
            ...formMascota,
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
            const mascotaConId = { ...formMascota, id: Date.now() };
            const clienteConMascota = {
                ...formData,
                mascotas: [mascotaConId]
            };

            const response = await axios.post(URL_CLIENTES, clienteConMascota);
            alert("Cliente guardado con éxito");
            
            //para resetear el formulario
            setFormdata(initialState );
            setFormMascota(initialMascota);
            //para cerrar el modal
            if(response){
                onUpdated();
                onClose();
            }
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

                <hr />
                <h4 className="text-center my-3">Datos de la Mascota</h4>

                <Form.Group className="mb-3">
                <Form.Label>Nombre</Form.Label>
                <Form.Control type="text" name="nombre" placeholder="Nombre de la mascota" value={formMascota.nombre} onChange={handleChangeMascota}/>
                </Form.Group>

                <Form.Group className="mb-3">
                <Form.Label>Especie</Form.Label>
                <Form.Control type="text" name="especie" placeholder="Perro, Gato, etc." value={formMascota.especie} onChange={handleChangeMascota}/>
                </Form.Group>

                <Form.Group className="mb-3">
                <Form.Label>Raza</Form.Label>
                <Form.Control type="text" name="raza" placeholder="Raza" value={formMascota.raza} onChange={handleChangeMascota}/>
                </Form.Group>

                <Form.Group className="mb-3">
                <Form.Label>Edad</Form.Label>
                <Form.Control type="number" name="edad" placeholder="Edad" value={formMascota.edad} onChange={handleChangeMascota}/>
                </Form.Group>

                <Form.Group className="mb-3">
                <Form.Label>Sexo</Form.Label>
                <Form.Control type="text" name="sexo" placeholder="Macho / Hembra" value={formMascota.sexo} onChange={handleChangeMascota}/>
                </Form.Group>

                <div className=" text-end mt3">
                    <Button className="m-2" variant="danger" onClick={onClose}>Cancelar</Button>

                    <Button type="submit" variant="primary">Guardar</Button>

                </div>

            </Form>
        </div>
    );
}

export default FormClient;