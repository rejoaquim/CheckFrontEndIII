import React from 'react';
import "./style.css";


export default function Header() {
    const menu = [
        {
            parte: "#", 
            aba: "Home",
        },
        {
            parte: "#projects",
            aba: "Portfólio",

        },
        {
            parte: "#footer",
            aba: "Sobre",
        }]
    return (
        <header>

            <h1>Renan Joaquim</h1>

            <ul>
                {
                    menu.map(({parte, aba}, index) => <a href={parte} key={index}><li>{aba}</li></a>)
                }
            </ul>
        </header>
    )
}

