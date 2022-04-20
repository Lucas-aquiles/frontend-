import React from 'react';

import "./BodyPage.css"
import imagen from "../img/imagenpensante.svg"

const BodyPage = () => {



    return (
        <div className="container_all" id='div ' >

            <div className="cover">

                {/* ---------------------        */}

                <div className='bg_color'    > </div>
                <div className='wave w1 '></div>
                <div class="wave w2 "> </div>



                {/* --------------------------- */}

                <div className="container__cover">

                    <div className="container__info">
                        <h1>BUILD YOUR</h1>
                        <h2>BUSINESS</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus molestias cumque at, impedit eum corrupti libero ipsam placeat, nulla, maiores totam qui ea distinctio. Velit, distinctio. Iste iusto deserunt esse?</p>
                        <input type="button" value="Get Started" />
                    </div>
                    <div className="container__vector">
                        <img src={imagen} alt="" />
                    </div>
                </div>
            </div>



        </div>


    )
}

export default BodyPage





