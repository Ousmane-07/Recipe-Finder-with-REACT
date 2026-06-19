import logo from './images/logo.svg'
import { Link } from 'react-router-dom'
function Nav() { 


    return ( 
        <>
        <nav className="nav-wrapper">
            <div className="nav-container">
            <img src={logo}></img>
            <div className="nav-links">
                <Link to="/" className="nav-text">Home</Link>
                <Link to="/about" className="nav-text">About</Link>
                <Link to="/recipes" className="nav-text">Recipes</Link>
            </div>
                <Link to="/recipes" className="browse-btn btn">Browse recipes</Link>
            </div>
        </nav>
        </>
    )
}

export default Nav