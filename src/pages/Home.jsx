import cover from '../assets/pizza1.jpg';
import './page.css'
import { Footer } from '../components/Footer';
import { useNavigate } from "react-router-dom";

export function Home() {
    const navigate = useNavigate();
    return(
        <div className="home">
            <img src={cover}/>
            <button onClick={() => navigate("/orders")} className='button order-btn fs-1'>Order a pizza</button>
            <button onClick={() => navigate("/recipes")} className='button recipes-btn fs-2'>Recipes</button>
            <button onClick={() => navigate("/about")} className='button about-btn fs-3'>Who we are?</button>
            
            <Footer />
        </div>
    )
}