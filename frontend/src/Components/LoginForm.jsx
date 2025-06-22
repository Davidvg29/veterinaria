import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const FormLogin = ()=>{
    const [user, setUser] = useState({
        username:"",
        password:""
    })

    const handleUser = (e)=>{
        setUser({
            ...user, [e.target.name]: e.target.value
        })
    }

    const validationUser = (e)=>{
        
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
                <p className="text-danger">mensaje de error</p>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="No soy un robot" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Iniciar sesion
                </Button>
            </Form>
        </div>
    )
}
export default FormLogin