import './footer.css';
import {Heart, Pizza, Truck,ForkKnife} from "phosphor-react"
export function Footer() {
    return(
        <div className="footer flex">
            <div className="section flex">
                <span>
                <Heart  size={32}/>
                </span>    
                <p className='txt'>
                    Lorem ipsum dolor sit amet c
                    onsectetur adipisicing elit. Ipsum q
                    uos in, voluptas unde debitis nobis 
                    possimus maxime recusandae omnis at 
                </p>
            </div>
            <div className="section flex">    
                <span>
                    <Pizza  size={32} />
                </span>
                <p className='txt'>
                    Lorem ipsum dolor sit amet c
                    onsectetur adipisicing elit. Ipsum q
                    uos in, voluptas unde debitis nobis 
                    possimus maxime recusandae omnis at 
                </p>
            </div>
            <div className="section flex">    
            <span>
                <Truck  size={32}/>
                </span>
                <p className='txt'>
                    Lorem ipsum dolor sit amet c
                    onsectetur adipisicing elit. Ipsum q
                    uos in, voluptas unde debitis nobis 
                    possimus maxime recusandae omnis at 
                </p>
            </div>
            <div className="section flex">    
            <span>
                <ForkKnife  size={32}/>
                </span>                
                <p className='txt'>
                    Lorem ipsum dolor sit amet c
                    onsectetur adipisicing elit. Ipsum q
                    uos in, voluptas unde debitis nobis 
                    possimus maxime recusandae omnis at 
                </p>
            </div>
            
        </div>
    )
}