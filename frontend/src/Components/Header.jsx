import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import logovet from "../assets/logovet.svg";
import login from "../assets/login.svg"
import iconoCerrarSesion from "../assets/iconoCerrarSesion.svg"

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';



function Header() {
  const location = useLocation()
  return (
<>
      {['sm'].map((expand) => (
        <Navbar key={expand} expand={expand} className="px-1 w-100 d-flex align-items-center justify-content-between">
          <Container fluid>
            <Navbar.Brand >
              {location.pathname.includes('administrator') || location.pathname.includes("nosotros")? (
            <Link to="/administrator">
              <img
                src={logovet}
                width="200px"

                className="d-inline-block align-top"
                alt="Logo Veterinaria"
              />
            </Link>
            ): location.pathname === "/" ? (<img
                src={logovet}
                width="200px"

                className="d-inline-block align-top"
                alt="Logo Veterinaria"
              /> ) : location.pathname === "/login" ? <Link to="/">
              <img
                src={logovet}
                width="200px"

                className="d-inline-block align-top"
                alt="Logo Veterinaria"
              />
            </Link> : "" }
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Menu
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  {location.pathname.includes("administrator") && (
                    <>
                      <Nav.Link as={Link} to="/administrator/clientes">Clientes</Nav.Link>
                      <Nav.Link as={Link} to="/administrator/productos">Productos</Nav.Link>
                    </>
                  )}
                  
                  {/* <NavDropdown
                    title="Opciones"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item as={Link} to="/nosotros" >Desarrolladores</NavDropdown.Item>
                    <NavDropdown.Divider />
                    {location.pathname.includes("administrator") && (
                      <NavDropdown.Item as={Link} to="/login">Cerrar sesion</NavDropdown.Item>
                  )}
                  </NavDropdown> */}
                  {!location.pathname.includes('nosotros') && (<Nav.Link as={Link} to="/nosotros">Desarrolladores</Nav.Link>)}
                  {!location.pathname.includes('administrator') && (
                    <Link to='/login'><img src={login} alt="" className='' style={{width: '50px'}}/></Link>
                  ) } 
                </Nav>
                {location.pathname.includes("administrator") && (
                  <Link to='/login'><img src={iconoCerrarSesion} alt="" style={{width: '50px', marginRight: '20px'}}/></Link>
                )}
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>



    // <Navbar>
    //   <div className="px-5 w-100 d-flex align-items-center justify-content-between">
    //     <Navbar.Brand>
    //       {location.pathname === "/administrator" || location.pathname === "/administrator/clientes" || location.pathname === "/administrator/productos" ? (
    //         <Link to="/administrator">
    //           <img
    //             src={logovet}
    //             width="200px"

    //             className="d-inline-block align-top"
    //             alt="Logo Veterinaria"
    //           />
    //         </Link>
    //         ): location.pathname === "/" ? (<img
    //             src={logovet}
    //             width="200px"

    //             className="d-inline-block align-top"
    //             alt="Logo Veterinaria"
    //           /> ) : location.pathname === "/login" ? <Link to="/">
    //           <img
    //             src={logovet}
    //             width="200px"

    //             className="d-inline-block align-top"
    //             alt="Logo Veterinaria"
    //           />
    //         </Link> : "" }


    //     </Navbar.Brand>
        // {location.pathname === "/administrator" && (
        //   <Nav className="me-auto">


        //     <Nav.Link href="/administrator/clientes">CLIENTES</Nav.Link>
        //     <Nav.Link href="/administrator/productos">PRODUCTOS</Nav.Link>

        //   </Nav>
        // )}
    //     <Navbar.Toggle />
    //     <Navbar.Collapse className="justify-content-end">
    //       {location.pathname === "/"
    //         ? (<a href="/login"><img
    //           src={login}
    //           width="50px"
    //           alt="Login"
    //         /> </a>)
    //         : location.pathname === "/administrator"
    //           ? (<a href="/login"
    //             onClick={(e) => {
    //               e.preventDefault();
    //               const confirmar = window.confirm("¿Estás seguro que querés cerrar sesión?");
    //               if (confirmar) {
    //                 window.location.href = "/login";
    //               }
    //             }}><img
    //               src={iconoCerrarSesion}
    //               width="50px"
    //               alt="CerrarSesion"
    //             /> </a>)
    //           : ""
    //       }

    //     </Navbar.Collapse>
    //   </div>
    // </Navbar>
  );
}

export default Header;