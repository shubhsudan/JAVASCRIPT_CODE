import React from 'react'
import logo from "../src/assets/DB2019AL01950_web_1600.jpg"

function Navbar(){
    return(
        <div className = 'Navbar'>
            <div className='leftside'>
                <img src = {logo}/>
            </div>
            <div className='rightSide'>
                <Link to = "/Signup">Signup</Link>

            </div>
        </div>

    )
}