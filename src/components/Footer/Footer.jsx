import React from 'react'
import {AiOutlineCopyrightCircle} from "react-icons/ai"
import {BsApple} from "react-icons/bs"
import "./footer.css"

export default function Footer() {
  return (
    <footer>
        <div>
            <BsApple size={30}/>
        </div>
        <div style={{
            display:"flex",
            alignItems:'center'
        }}>
            <p><AiOutlineCopyrightCircle/></p>
            <p>Copyright By Tisna Nada Music</p>
        </div>
    </footer>
  )
}
