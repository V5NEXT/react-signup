import { useState } from "react"
import "../style/navbar.css"
import pic from "../img/icon.jpg";
import { AiOutlineMenu } from 'react-icons/ai';


export default function Navbar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false)

  return (
    <nav className="navigation">
      <a href="/" className="brand-name">
      <img className="company-logo" src={pic} alt='' /> </a>
      <button
        className="hamburger"   
        onClick={() => {
          setIsNavExpanded(!isNavExpanded)
        }}
      >
        {<AiOutlineMenu/>}
      </button>
      <div
        className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }
      >
        <ul>
          <li>
            <a className="navlinks" href="/">Home</a>
          </li>
          <li>
            <a className="navlinks"  href="/">About Us</a>
          </li>
          <li>
            <a className="navlinks"  href="/">Contact Us</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}