import React from 'react'
import './NavBar.css'
import { Link } from 'react-router-dom'
const NavBar = () => {
  return (
    <div>
        <nav>
            <div id='child1'>
                <li><img src="https://wallpapers.com/images/featured/netflix-logo-png-fqwt81hprrz7xsfg.jpg" alt="" /></li>
             

            </div>
               <div id='child2'>
                <Link to='/'><li>Home</li></Link>
                <li>location</li>
               <Link to='/Sign'>  <li>SignUp</li></Link>
            </div>

        </nav>
    </div>
  )
}

export default NavBar