import React, { useState } from 'react'
import About from './About'
import Home from "./Home"
import Services from './Services'
import Contact from './Contact'

function Nav() {
    const [data,setData] = useState(0)
  return (
    <div>
        <ul>
            <li onClick={()=>{setData(0)}}>Home</li>
            <li onClick={()=>{setData(1)}}>About</li>
            <li onClick={()=>{setData(2)}}>Services</li>
            <li onClick={()=>{setData(3)}}>Contact</li>
        </ul>
        <br /><br /><br />
        {
            data ==0 ? <Home /> : ""
        }
        {
            data ==1 ? <About /> : ""
        }
        {
            data ==2 ? <Services /> : ""
        }
        {
            data ==3 ? <Contact /> : ""
        }
    </div>
  )
}

export default Nav