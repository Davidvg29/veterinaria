import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Banner1 = () => {

    return (
        <>

            <div className="d-flex justify-content-center align-items-center flex-wrap gap-4 p-4" style={{ minHeight: '100vh' }}>
                <div>
                    <h1 style={{
                        fontFamily: 'Segoe UI, sans-serif',
                        fontSize: '2.8rem',
                        fontWeight: '500',
                        color: "rgba(37, 37, 37, 0.74)",
                        textAlign: 'center',
                        marginBottom: '2rem'
                    }}>
                        Atención y bienestar para tu mascota, todo en un solo lugar
                    </h1>

                </div>
                <div>
                    <Card style={{ width: '18rem', textAlign: 'center' }} className="shadow-sm">
                        <div className="mt-4">
                            <i className="bi bi-telephone-forward" style={{ fontSize: '4.5rem', color: 'green' }}></i>
                        </div>
                        <Card.Body>
                            <Card.Title>Atención 24/7</Card.Title>
                            <Card.Text className="text-muted">
                                Llamanos en cualquier momento, estamos disponibles las 24 horas para emergencias.
                            </Card.Text>
                            <Button style={{backgroundColor:"rgba(102, 4, 168, 0.5)", border: "none"}} a href="https://wa.me/543816473429" target="_blank" className='w-75'>Contactar</Button>
                        </Card.Body>
                    </Card>
                </div>

                <div>
                    <Card style={{ width: '18rem', textAlign: 'center' }} className="shadow-sm">
                        <div className="mt-4">
                            <i className="bi bi-clipboard2-pulse" style={{ fontSize: '4.5rem', color: 'brown' }}></i>
                        </div>
                        <Card.Body>
                            <Card.Title>Consultas Medicas</Card.Title>
                            <Card.Text className="text-muted">
                                Exámenes clínicos, diagnósticos y seguimiento médico para tus mascotas.
                            </Card.Text>
                            <Button style={{backgroundColor:"rgba(102, 4, 168, 0.5)", border: "none"}} a href="https://wa.me/543816473429" target="_blank" className='w-75'>Solicitar</Button>
                        </Card.Body>
                    </Card>
                </div>

                <div>
                    <Card style={{ width: '18rem', textAlign: 'center' }} className="shadow-sm">
                        <div className="mt-4">
                            <i className="bi bi-scissors" style={{ fontSize: '4.5rem', color: 'blue' }}></i>
                        </div>
                        <Card.Body>
                            <Card.Title>Peluquería</Card.Title>
                            <Card.Text className="text-muted">
                                Servicios de baño, corte y estética. Dejamos tu Mascota limpia, cómoda y con un estilo nuevo.
                            </Card.Text>
                            <Button style={{backgroundColor:"rgba(102, 4, 168, 0.5)", border: "none"}} a href="https://wa.me/543816473429" target="_blank" className='w-75'>Reservar</Button>
                        </Card.Body>
                    </Card>
                </div>

                <div>
                    <Card style={{ width: '18rem', textAlign: 'center' }} className="shadow-sm">
                        <div className="mt-4">
                            <i className="bi bi-capsule" style={{ fontSize: '4.5rem', color: 'red' }}></i>
                        </div>
                        <Card.Body>
                            <Card.Title>Vacunación</Card.Title>
                            <Card.Text className="text-muted">
                                Mantené al día la salud de tu mascota con nuestro calendario de vacunas.
                            </Card.Text>
                            <Button style={{backgroundColor:"rgba(102, 4, 168, 0.5)", border: "none"}} a href="https://wa.me/543816473429" target="_blank" className='w-75'> Consultar</Button>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </>
    )
}

export default Banner1