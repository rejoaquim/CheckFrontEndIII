import React from 'react';
import "./style.css";



const menu = [
    {
      nome:"GitHub",
      link: "https://github.com/rejoaquim",
    },
    {
      nome:"LinkedIn",
      link: "https://www.linkedin.com/in/renan-aj",
    },
    {
      nome:"Instagram",
      link: "https://www.instagram.com/renan.aj/",
    },
    ]


export default function Footer() {

return (
    <footer className="footer" id="footer">

        <h1>© Renan Website 2022</h1>

        <ul className="ul-footer">
            {
                menu.map(({nome, link},index)=> <a href={link} className="links" key={index}><li>{nome}</li></a>)
            }
        </ul>
    </footer>
)
}
