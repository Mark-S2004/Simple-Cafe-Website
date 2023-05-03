import {Link} from "react-router-dom"

const NavBar = () => {
    return (
        <nav>
            <Link to="\">HomePage</Link>
            <Link to="\menu">Menu</Link>
            <Link to="\about-us">About us</Link>
            <Link to="\contact">Contact</Link>
        </nav>
    )
}

export default NavBar