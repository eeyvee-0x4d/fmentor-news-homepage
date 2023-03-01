import logo from "../../assets/images/logo.svg"
import menuOpen from "../../assets/images/icon-menu.svg"
import menuClose from "../../assets/images/icon-menu-close.svg"

import { useState } from 'react'

const Navigation = () => {

  let [isOpen, setOpen] = useState(false)

  return(
    <header role="header" className="header">
      <a href="#" alt="home link" className="brand-logo">
        <img src={logo} alt="logo" />     
      </a>
      <button className={`menu-button ${isOpen ? "menu-open" : "menu-close"}`}>
        <img src={!isOpen ? menuOpen : menuClose} alt="menu button" onClick={() => {
          setOpen(!isOpen)
        }} />
      </button>
      <nav role="navigation" className={`mobile-navigation ${isOpen ? "menu-open" : "menu-close"}`} onClick={(e) => {
          if(e.target !== e.currentTarget) return
          setOpen(setOpen(false))
        }
      }>
        <ul className={`nav-items`}>
          <li className="nav-item"><a href="#">Home</a></li>
          <li className="nav-item"><a href="#">New</a></li>
          <li className="nav-item"><a href="#">Popular</a></li>
          <li className="nav-item"><a href="#">Trending</a></li>
          <li className="nav-item"><a href="#">Categories</a></li>
        </ul>
      </nav>
      <nav role="navigation" className={`navigation`}>
        <ul className={`nav-items`}>
          <li className="nav-item"><a href="#">Home</a></li>
          <li className="nav-item"><a href="#">New</a></li>
          <li className="nav-item"><a href="#">Popular</a></li>
          <li className="nav-item"><a href="#">Trending</a></li>
          <li className="nav-item"><a href="#">Categories</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Navigation