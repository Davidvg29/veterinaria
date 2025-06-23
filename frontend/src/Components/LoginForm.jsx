import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from "axios"
import { USER } from '../Constants/endpoints';

const FormLogin = ()=>{
    const [message, setMessage] = useState("")

    const [user, setUser] = useState({
        username:"",
        password:""
    })

    const handleUser = (e)=>{
        setUser({
            ...user, [e.target.name]: e.target.value
        })
    }

    const validationUser = async(e)=>{
        e.preventDefault()
        try {
            const {data} = await axios(USER)
            if(user.username === data.username && user.password === data.password){
                
            }
        } catch (error) {
            setMessage("Ocurri un error, intente mas tarde.")
        }
    }

    return(
        <div>
            <h2>Ingrese credenciales de administrador</h2>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Usuario</Form.Label>
                    <Form.Control type="text" name="username" onChange={handleUser} value={user.username} placeholder="Ingresa tu usuario" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control type="password" name="password" onChange={handleUser} value={user.password} placeholder="Contraseña" />
                </Form.Group>
                <p className="text-danger">{message}</p>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="No soy un robot" />
                </Form.Group>
                <Button variant="primary" type="submit" onClick={validationUser}>
                    Iniciar sesion
                </Button>
            </Form>
        </div>
    )
}
export default FormLogin