import { useState, useEffect } from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { URL_CLIENTES } from '../../../Constants/endpoints';

const FormMascota = ({ clienteId, onClose, onUpdated }) => {
    const [mascota, setMascota] = useState({
        nombre: "",
        especie: "",
        raza: "",
        edad: "",
        sexo: ""
    });

    const handleChange = (e) => {
        setMascota({ ...mascota, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.get(`${URL_CLIENTES}/${clienteId}`);
            const cliente = response.data;

            const nuevaMascota = { ...mascota, id: Date.now() }; // id único
            const nuevasMascotas = [...(cliente.mascotas || []), nuevaMascota];

            await axios.put(`${URL_CLIENTES}/${clienteId}`, {
                ...cliente,
                mascotas: nuevasMascotas
            });
            alert("Mascota agregada con éxito");
            onUpdated();
            onClose();
        } catch (error) {
            console.error("Error al agregar la mascota:", error);
        }
    };

    return (
        <div className="bg-white p-4 rounded-3 shadow text-dark w-50 ">
            <h3 className="text-center mb-4">Formulario de Mascotas</h3>
        <Form onSubmit={handleSubmit} className="w-100">
            <Form.Group className="mb-3">
                <Form.Label>Nombre</Form.Label>
                <Form.Control type="text" name="nombre" placeholder="Nombre de la mascota" value={mascota.nombre} onChange={handleChange} required />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Especie</Form.Label>
                <Form.Control type="text" name="especie" placeholder="Perro, Gato, etc." value={mascota.especie} onChange={handleChange} required />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Raza</Form.Label>
                <Form.Control type="text" name="raza" placeholder="Raza" value={mascota.raza} onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Edad</Form.Label>
                <Form.Control type="number" name="edad" placeholder="Edad" value={mascota.edad} onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Sexo</Form.Label>
                <Form.Control type="text" name="sexo" placeholder="Macho / Hembra" value={mascota.sexo} onChange={handleChange} />
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
};

export default FormMascota;