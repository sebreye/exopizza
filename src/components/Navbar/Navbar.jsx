import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
        <header>
            <h1>K3'PIZZA</h1>
            <nav>
                <ul>
                    <li><Link to="/panier" style={{textDecoration: 'none', color: "black"}}>panier</Link></li>
                </ul>
            </nav>
        </header>
        <main>
            <Outlet/>
        </main>
    </div>
  )
}

export default Navbar