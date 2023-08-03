import React, {useState} from 'react'
import "./navbar.css"
import {FaBars, FaTimes} from "react-icons"
import {link} from "react-scroll"
const Navbar = () =>{

  const [nav, setNav] = useState(false)

  const links =[
    {
      id: 1,
      link: "home",
    },
    {
      id: 1,
      link: "About us",
    },
    {
      id: 1,
      link: "Services",
    },
    {
      id: 1,
      link: "Contact us",
    },

  ]
  return (
    <div className='navBar-container'>
        <div>
          <h1 className='Happytails'>HappyTailsPetsSpa</h1>
        </div>

        <ul className='navBar-links'>
          {links.map(({id, link}) => (
            <li key={id} className='links'></li>
          ))}
        </ul>
      
    </div>
  )
}

export default Navbar