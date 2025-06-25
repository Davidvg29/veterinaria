import Footer from "../Components/Footer";
import Header from "../Components/Header";

const PagoNotFound = () => {
    return ( 
        <div>
            <Header/>
            <div className="d-flex flex-column justify-content-center align-items-center" style={{height:'80vh'}}>
                <h1>404</h1>
                <h2>PAGE NOT FOUND</h2>
            </div>
            <Footer/>
        </div>
     );
}
 
export default PagoNotFound;