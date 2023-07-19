import cover from '../assets/pizza2.jpg';
import './page.css'
import { Footer } from '../components/Footer';

export function Home() {
    return(
        <div className="home">
            <img src={cover}/>
            <button className='order-btn fs-1'>Order a pizza</button>
            <button className='recipes-btn fs-2'>Recipes</button>
            <button className='about-btn fs-3'>Who we are?</button>
            <Footer />
        </div>

    )
}