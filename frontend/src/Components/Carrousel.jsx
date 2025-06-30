import Carousel from 'react-bootstrap/Carousel';
import logo1 from '../assets/logo1.svg';
import logo2 from '../assets/logo2.svg';
import logo3 from '../assets/logo3.svg';
import logo4 from '../assets/logo4.svg';
 
function Carrusel() {
  return (
    <Carousel interval={3000} className='rounded-5 p-5'>
      <Carousel.Item className='bg-primary rounded-5'>
        <img 
    className="d-block w-100 rounded-5"
    src={logo1}
    alt="First slide"
    style={{ height: "650px", objectFit: "cover" }}
        />
      </Carousel.Item>
      <Carousel.Item className='rounded-5'>
        <img
      className="d-block w-100 rounded-5"
      src={logo4}
      alt="First slide"
      style={{ height: "650px", objectFit: "cover" }}
        />
      </Carousel.Item>
      <Carousel.Item className='rounded-5'>
        <img
      className="d-block w-100 rounded-5"
      src={logo3}
      alt="First slide"
      style={{ height: "650px", objectFit: "cover" }}
        />
      </Carousel.Item>
      <Carousel.Item className='rounded-5'>
        <img
      className="d-block w-100 rounded-5"
      src={logo2}
      alt="First slide"
      style={{ height: "650px", objectFit: "cover" }}
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default Carrusel;