import React from 'react'
import "./style.css"
import pokedex from "../assets/pokedex.png"
import primeirocheck from "../assets/primeirocheck.png"
import segundocheck from "../assets/segundocheck.png"

const data = [
  {
    id: "1",
    name: "PokéDex Interativa",
    link: "https://rejoaquim.github.io/PokeDex/",
    image:
      pokedex,
  },
  {
    id: "2",
    name: "Site de Restaurante - CheckPoint II de Front End I",
    link: "https://github.com/rejoaquim/CheckPoint3FrontEndI",
    image:
      segundocheck,
  },
  {
    id: "3",
    name: "Meu primeiro CheckPoint de Front End I para a Digital House",
    link: "https://github.com/rejoaquim/checkpoint_FrontEndI",
    image:
      primeirocheck,
  },

];


export default function Projects() {
  return (
    <div className="content-projects" id="projects">
      <h1 className="title-project">Projetos</h1>
      <ul className="list-projects">
        {data.map(({ image, name, link}) => (
          <a href={link}>
            <li className="item-list-projects">
              <img src={image} width={300} />
              <h3 className="name-project">{name}</h3>
            </li>
          </a>
        ))}
      </ul>
    </div>
  )
}  