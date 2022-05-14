import logo from "../img/airbnb.svg"

function Navbar() {
    return(
        <nav className="nav-item">
            <img src={logo} alt="logo" className="logo"/>
        </nav>
    )
}


export default Navbar;