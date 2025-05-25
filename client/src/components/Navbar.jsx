import { NavLink } from "react-router-dom"
import "../App.css"

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
        <div className="container-fluid">
          <NavLink className="navbar-brand fw-bold fs-4" to="/">
            🛒 Products Page
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/"
                  style={({ isActive }) => ({
                    fontWeight: isActive ? "bold" : "normal",
                    color: isActive ? "#fff" : "#dcdcdc",
                  })}
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/product_list"
                  style={({ isActive }) => ({
                    fontWeight: isActive ? "bold" : "normal",
                    color: isActive ? "#fff" : "#dcdcdc",
                  })}
                >
                  Products
                </NavLink>
              </li>
            </ul>

            <NavLink to="/cart" className="btn btn-light fw-semibold">
              🛍️ View Cart
            </NavLink>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
