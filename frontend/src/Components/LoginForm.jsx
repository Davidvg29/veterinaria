import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from "axios"
import { USER } from '../Constants/endpoints';
import { useNavigate } from 'react-router-dom';
import img from "../assets/patitasPatron.png"

const FormLogin = ()=>{
    const [message, setMessage] = useState("")
    const navigate = useNavigate();

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
                setMessage("")
                navigate("/administrator")
            }else{
                setMessage("Credenciales incorrectas")
            }
        } catch (error) {
            setMessage("Ocurrio un error, intente mas tarde.")
        }
    }

    return(
        <div style={{ height: '70vh' }} className="d-flex justify-content-center align-items-start m-2">
            <div className="container">
                <div className="row justify-content-center">
                <div className="col-12 col-sm-10 col-md-8 col-lg-8 col-xl-6">
                    <Form onSubmit={validationUser} className="p-4 rounded-3 shadow text-dark d-flex flex-column justify-content-center align-items-center">
                    <h2 className="mb-4 text-center">Ingrese credenciales de administrador</h2>
                    <Form.Group className="mb-3 w-75 px-2 px-md-4 px-xxl-10" controlId="formBasicEmail">
                        <Form.Label>Usuario</Form.Label>
                        <Form.Control type="text" name="username" onChange={handleUser} value={user.username} placeholder="Ingresa tu usuario" />
                    </Form.Group>
                    <Form.Group className="mb-3 w-75 px-2 px-md-4 px-xxl-10" controlId="formBasicPassword">
                        <Form.Label>Contraseña</Form.Label>
                        <Form.Control type="password" name="password" onChange={handleUser} value={user.password} placeholder="Contraseña" />
                    </Form.Group>
                    <p className="text-danger text-center">{message}</p>
                    <Button variant="primary" type="submit">
                        Iniciar sesión
                    </Button>
                    </Form>
                </div>
                </div>
            </div>
        </div>
    )
}
export default FormLogin