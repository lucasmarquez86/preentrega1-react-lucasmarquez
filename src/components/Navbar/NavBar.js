import logo from'../Navbar/assets/logo.jpg';
import Cartwidget from '../CartWidget/CartWidget';


const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
            <div className="container justify-content-between">
                <a className="navbar-brand" href="#">
                    <img src={logo} alt="Logo" width="150" />
                </a>
                <ul className="navbar-nav d-flex me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Inicio</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Remeras</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Pantalones</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Buzos</a>
                    </li>
                </ul>
                <span className="navbar-text">
                    <Cartwidget/>
                </span>
            </div>
        </nav>
    )
}

export default NavBar
