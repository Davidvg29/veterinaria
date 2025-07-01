import Footer from "../Components/Footer";
import Header from "../Components/Header";
import img from "../assets/404.jpg"

const PagoNotFound = () => {
    return ( 
        <div>
            <Header/>
            <div className="d-flex flex-column justify-content-center align-items-center" style={{height:'80vh'}}>
                {/* <h1>404</h1> */}
                <img src={img} alt="" />
                <h2 style={{color: 'rgba(63, 3, 175, 0.5)'}}>PAGINA NO ENCONTRADA.</h2>
            </div>
            <Footer/>
        </div>
     );
}
 
export default PagoNotFound;