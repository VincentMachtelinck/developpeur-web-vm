import { useState } from "react";
import "./navbar.css"

const Navbar = () => {
    const [showLinks, setShowLinks] = useState(false)
    const handleShowLinks = () => {
        setShowLinks(!showLinks)
    }
    return (
        <nav className={`navbar ${showLinks ? "showNavbar" : "hideNavbar"}`}>
            <div className="navText">
                <p className="name">Vincent Machtelinck</p>
                <h1>DEVELOPPEUR FRONTEND</h1>
            </div>
            <ul className="navbarLinks">
                <a href="/" className="navbarLink"><li className="navbarItem">Accueil</li></a>
                <span className="navbarLine">|</span>
                <a href="/projets" className="navbarLink"><li className="navbarItem">Réalisations</li></a>
                <span className="navbarLine">|</span>
                <a href="/cv" className="navbarLink"><li className="navbarItem">CV</li></a>
                <span className="navbarLine">|</span>
                <a href="contact" className="navbarLink"><li className="navbarItem">Contact</li></a>
            </ul>
            <button className="navbarBurger" onClick={handleShowLinks} >
                <span className="burger-bar" ></span>
            </button>
        </nav>

    );
}

export default Navbar;