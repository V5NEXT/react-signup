import { useState } from "react"
import "../style/navbar.css"
// import companyLogo from '../img/logo.jpg'

export default function Navbar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false)

  return (
    <nav className="navigation">
      <a href="/" className="brand-name">
      <img src='../img/logo.jpg' /> </a>
      <button
        className="hamburger"   
        onClick={() => {
          setIsNavExpanded(!isNavExpanded)
        }}
      >
        {/* hamburger svg code... */}
      </button>
      <div
        className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }
      >
        <ul>
          <li>
            <a className="navlinks" href="/home">Home</a>
          </li>
          <li>
            <a className="navlinks"  href="/about">About Us</a>
          </li>
          <li>
            <a className="navlinks"  href="/contact">Contact Us</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}