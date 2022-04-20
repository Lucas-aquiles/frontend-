import React, { useState } from "react";

export default function ScrollHooks() {
    const [scrollY, setScrollY] = useState(0);




    window.onscroll = function () {
        let scroll = document.documentElement.scrollTop;
        let header = document.getElementById("header")
        if (scroll > 20) {
            header.classList.add('nav_mod')
        } else if (scroll < 20) {
            header.classList.remove('nav_mod')
        }

    }


    let header = document.getElementById("header")
    let body = document.getElementById("applic")
    let nav = document.getElementById("navt")


    window.addEventListener("resize", function () {
        if (window.innerWidth > 760) {
            header.classList.remove('move_content')
            body.classList.remove('App_move')
            nav.classList.remove('move_content')
        }

        if (window.innerWidth < 760) {
            header.classList.add('move_content')
            body.classList.add('App_move')
            //         nav.classList.add('move_content')
        }

    })
















    // useEffect(() => {
    //console.log("Moviendo el Scroll");

    // const detectarScroll = () => setScrollY(window.pageYOffset);

    // window.addEventListener("scroll", detectarScroll);

    // return () => {
    //     window.removeEventListener("scroll", detectarScroll);
    //console.log("Fase de Desmontaje");
    //     };
    // }, [scrollY]);

    // useEffect(() => {
    //console.log("Fase de Montaje");
    // }, []);

    // useEffect(() => {
    //console.log("Fase de Actualización");
    // });

    // useEffect(() => {
    //     return () => {
    //console.log("Fase de Desmontaje");
    //     };
    // });

    return (
        ''
    );
}