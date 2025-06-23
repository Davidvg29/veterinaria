import Carousel from 'react-bootstrap/Carousel';
import logo1 from '../assets/logo1.svg';
import logo2 from '../assets/logo2.svg';
import logo3 from '../assets/logo3.svg';

function carrusel() {
  return (
    <Carousel interval={3000}>
      <Carousel.Item>
        <img
    className="d-block w-100"
    src={logo1}
    alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
      className="d-block w-100"
      src={logo2}
      alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
      className="d-block w-100"
      src={logo3}
      alt="First slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default carrusel;