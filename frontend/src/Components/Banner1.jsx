import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Banner1 = () => {

    return (
        <>
            <div className="d-flex justify-content-center align-items-center flex-wrap gap-4 p-4" style={{ height: '100vh'}}>
                <div>
                    <Card style={{ width: '18rem', textAlign: 'center' }} className="shadow-sm">
                        <div className="mt-4">
                            <i className="bi bi-telephone-forward" style={{ fontSize: '3.5rem', color: '#ccc' }}></i>
                        </div>
                        <Card.Body>
                            <Card.Title>Atención 24/7</Card.Title>
                            <Card.Text className="text-muted">
                                Llamanos en cualquier momento, estamos disponibles las 24 horas para emergencias.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>

                <div>
                    <Card style={{ width: '18rem', textAlign: 'center' }} className="shadow-sm">
                        <div className="mt-4">
                            <i className="bi bi-clipboard2-pulse" style={{ fontSize: '3.5rem', color: '#ccc' }}></i>
                        </div>
                        <Card.Body>
                            <Card.Title>Consultas Medicas</Card.Title>
                            <Card.Text className="text-muted">
                                Exámenes clínicos, diagnósticos y seguimiento médico para tus mascotas.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>

                <div>
                    <Card style={{ width: '18rem', textAlign: 'center' }} className="shadow-sm">
                        <div className="mt-4">
                            <i className="bi bi-scissors" style={{ fontSize: '3.5rem', color: '#ccc' }}></i>
                        </div>
                        <Card.Body>
                            <Card.Title>Peluquería</Card.Title>
                            <Card.Text className="text-muted">
                                Servicios de baño, corte y estética. Dejamos tu Mascota limpia, cómoda y con un estilo nuevo.
                            </Card.Text>
                            
                        </Card.Body>
                    </Card>
                </div>

                <div>
                    <Card style={{ width: '18rem', textAlign: 'center' }} className="shadow-sm">
                        <div className="mt-4">
                            <i className="bi bi-capsule" style={{ fontSize: '3.5rem', color: '#ccc' }}></i>
                        </div>
                        <Card.Body>
                            <Card.Title>Vacunación</Card.Title>
                            <Card.Text className="text-muted">
                                Mantené al día la salud de tu mascota con nuestro calendario de vacunas.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </>
    )
}

export default Banner1