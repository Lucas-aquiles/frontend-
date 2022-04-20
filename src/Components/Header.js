import React, { useState, useContext } from 'react';

import "./Header.css"
import logo1 from "../img/LUCAS.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faBars } from '@fortawesome/free-brands-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { DataContexto } from './DataContext';



const Header = ({ changeBody }) => {
    const [cambio, setCambio] = useState("")
    const [changeHeader, setChangeHeader] = useState("")
    const { setData, data } = useContext(DataContexto)
    console.log(data.datos)


    // let menu = document.getElementById("header");
    // let body = document.getElementById("container_all");
    // let nav1 = document.getElementById("nav");
    function handleClick(e) {
        if (cambio === "") {
            setCambio("nav")
        } else {
            setCambio("")
        }
        if (changeHeader === "") {
            setChangeHeader("content");
        } else {
            setChangeHeader("");

            //     // body.classList.toggle('');
        }
        changeBody(e)

    }

    return (
        <header id="header" className={`move_${changeHeader}`} >
            <div className="container__header">
                <div className="logo"   >
                    <img src={logo1} alt="" />
                </div>
                <div className="container__nav">


                    <nav id="navt" className={`move_${cambio}`}        >
                        <ul>
                            <li><a className='select' href="#" class="select">HOME</a></li>
                            <li><a className='select' href="#">ABOUT US</a></li>
                            <li><a className='select' href="#">HOW IT WORK</a></li>
                            <li><a className='select' href="#">CONTACT US</a></li>
                        </ul>
                    </nav>
                    <div onClick={handleClick} className="btn__menu" id="btn_menu"><FontAwesomeIcon className='fa' icon={faBars} /></div>

                </div>

            </div>

        </header >


    )
}

export default Header