import React from 'react'
import "./Footer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import logo1 from "../img/LUCAS.png"
const Footer = () => {
    return (
        <footer>
            <div className='container_footer' >
                <div className='box_footer'>
                    <div className='logo' >
                        <img src={logo1} alt='nave'></img>
                    </div>
                    <div className='terms'>
                        <p>Loren ipsum dolor  sit  amet  consectatur  adipision elit.Loren ipsum dolor  sit  amet  consectatur  adipision elit.Loren ipsum dolor  sit  amet  consectatur  adipision elit
                            .Loren ipsum dolor  sit  amet  consectatur  adipision elit.Loren ipsum dolor  sit  amet  consectatur  adipision elit
                            .Loren ipsum dolor  sit  amet  consectatur  adipision elit.Loren ipsum dolor  sit  amet  consectatur  adipision elit </p>

                    </div>

                </div>
                <div className='box_footer'>
                    <h2>Soluciones</h2>
                    <a href="https://www.google.com" >App Desarrollo</a>
                    <a href="#" >App Marketing </a>
                    <a href="#" >IOS Desarrollo</a>
                    <a href="#" >Android  Desarrollo</a>
                </div>
                <div className='box_footer'>
                    <h2>Compañia</h2>
                    <a href="#" >Acerca de </a>
                    <a href="#" >Trabajos </a>
                    <a href="#" >Procesos </a>
                    <a href="#" >Servicios </a>
                </div>
                <div className='box_footer'>
                    <h2>Redes Sociales</h2>
                    <a href="#" ><FontAwesomeIcon className='fa' icon={faFacebook} />Facebook </a>
                    <a href="#" ><FontAwesomeIcon className='fa' icon={faTwitter} />Twitter </a>
                    <a href="#" ><FontAwesomeIcon className='fa' icon={faLinkedin} />Linkedin </a>
                    <a href="#" ><FontAwesomeIcon className='fa' icon={faInstagram} />Instagram</a>
                </div>

            </div>
            <div className='box_copyright'>
                <hr />
                <p>   Todos los  derechos reservados  2022 ©   <b> Lucas M  </b> </p>


            </div>
        </footer>
    )
}

export default Footer