import React from 'react'
import {AiFillApple} from 'react-icons/ai'
import "./header.css"
import { NavLink } from 'react-router-dom'
import { AiFillHome } from "react-icons/ai"
import { FcAbout } from "react-icons/fc"

export default function Header() {
  return (
    <header>
        <div className='apple-logo'>
            <AiFillApple size={50} />
            <p>Apple Bosok</p>
        </div>
        <nav>
            <ul className='nav-ul' type='none'>
                <li className='list'>
                  <NavLink  to={"/"}><AiFillHome/>Branda</NavLink>
                </li>
                <li className='list'>
                  <NavLink to={"/about"}><FcAbout color='blue'/>Tentang</NavLink> 
                </li>
            </ul>
        </nav>
    </header>
  )
}
