
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import logovet from "../assets/logovet.svg";
import login from "../assets/login.svg"

function Header() {
  return (
    <Navbar className="bg-body-tertiary ">
      <div className="px-5 w-100 d-flex align-items-center justify-content-between">
        <Navbar.Brand>
          <img
            src={logovet}
            width="200px"
            
            className="d-inline-block align-top"
            alt="Logo Veterinaria"
          />
        </Navbar.Brand>

        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <a href="/login"><img
            src={login}
            width="50px"
            alt="Login"
          /> </a>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}

export default Header;