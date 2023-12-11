import "./NavBar.css";

import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
  return (
    <nav className="NavBar">
      <ul>
        <li><a href="#">Inicio</a></li>
        <li><a href="#">Contacto</a></li>
        <li><a href="#">Ubicacion</a></li>
        <li>
          <CartWidget />
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
