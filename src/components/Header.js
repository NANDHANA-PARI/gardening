import { Link, NavLink, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Header() {
  const { cart } = useCart();
  const navigate = useNavigate();

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success sticky-top shadow">
      <div className="container">

        {/* Brand */}
        <Link className="navbar-brand fw-bold" to="/">
          🌿 Green-Haven
        </Link>

        {/* Mobile Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#nav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu */}
        <div className="collapse navbar-collapse" id="nav">
          <ul className="navbar-nav ms-auto">

            <li className="nav-item">
              <NavLink className="nav-link" to="/" end>
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/aboutus">
                About Us
              </NavLink>
            </li>

            {/* 🌱 Plants */}
            <li className="nav-item dropdown">
              <span
                className="nav-link dropdown-toggle"
                role="button"
                data-bs-toggle="dropdown"
              >
                Plants
              </span>
              <ul className="dropdown-menu">
                <li>
                  <NavLink className="dropdown-item" to="/plants/indoorplants">
                    Indoor Plants
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/plants/outdoorplants">
                    Outdoor Plants
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/plants/hangingplants">
                    Hanging Plants
                  </NavLink>
                </li>
              </ul>
            </li>

            {/* 🪴 Pots */}
            <li className="nav-item dropdown">
              <span
                className="nav-link dropdown-toggle"
                role="button"
                data-bs-toggle="dropdown"
              >
                Pots
              </span>
              <ul className="dropdown-menu">
                <li><NavLink className="dropdown-item" to="/pots/ceramicpots">Ceramic Pots</NavLink></li>
                <li><NavLink className="dropdown-item" to="/pots/plasticpots">Plastic Pots</NavLink></li>
                <li><NavLink className="dropdown-item" to="/pots/woodenpots">Wooden Pots</NavLink></li>
              </ul>
            </li>

            {/* 🌾 Seeds */}
            <li className="nav-item dropdown">
              <span
                className="nav-link dropdown-toggle"
                role="button"
                data-bs-toggle="dropdown"
              >
                Seeds
              </span>
              <ul className="dropdown-menu">
                <li><NavLink className="dropdown-item" to="/seeds/flowerseeds">Flower Seeds</NavLink></li>
                <li><NavLink className="dropdown-item" to="/seeds/vegetableseeds">Vegetable Seeds</NavLink></li>
                <li><NavLink className="dropdown-item" to="/seeds/fruitseeds">Fruit Seeds</NavLink></li>
              </ul>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/services">
                Services
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">
                Contact
              </NavLink>
            </li>

          
          

            {/*<div class="icon">

               <a href="" className="btn btn-outline-dark">
              <i class="fa fa-sign-in" aria-hidden="true"></i>Login</a>
              <a href="" className="btn btn-outline-dark">
              <i class="fa fa-shopping-cart" aria-hidden="true"></i>Cart(0)</a>
            </div>*/}
             <li className="nav-item">
            <button
              className="btn btn-success position-relative ms-3"
              onClick={() => navigate("/cart")}
            >
              🛒
              {cartCount > 0 && (
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {cartCount}
                </span>
              )}
            </button>
            </li>
            </ul>
        </div>
      </div>
    </nav>

    
  );
}

export default Header;
