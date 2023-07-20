import about from "../assets/about.jpg";
import {FacebookLogo, InstagramLogo, TiktokLogo, WhatsappLogo, TelegramLogo} from "phosphor-react"
export function AboutUs() {
    return(
        <div className="about grid">
            <div className="about-left flex">
                <h1>Pizeria welcomes you :) </h1>
                <img src={about} />
            </div>
            <div className="about-right flex">
                <p>Lorem ipsum, dolor sit amet consectetur 
                    adipisicing elit. Fugit eos soluta tenetur a
                    spernatur? Assumenda itaque deserunt culpa corpo
                    ris quam tenetur temporibus sunt, aperiam, magni 
                    dignissimos 
                    ea harum numquam cum inventore.</p>
                <div className="socialmedia flex">
                <FacebookLogo size={32} color="red" weight="fill" />
                <InstagramLogo size={32} color="red" weight="fill" />
                <TiktokLogo size={32} color="red" weight="fill" />
                <WhatsappLogo size={32} color="red" weight="fill" />
                <TelegramLogo size={32} color="red" weight="fill" />
                </div>
            </div>
        </div>
    )
}