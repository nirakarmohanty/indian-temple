import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <>
      <div className="container-fluid nav_bg ">
        <div className="row">
          <div className="col-12 mx-auto warning">
            <nav class="navbar fixed-top navbar-expand-lg bg-body-tertiary">
              <div className="container-fluid navbar-colour">
                <NavLink
                  className="navbar-brand"
                  activeClassName="menu_active"
                  to="#"
                >
                  IndianTemple
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
                <div
                  className="collapse navbar-collapse justify-content-end"
                  id="navbarNav"
                >
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <NavLink
                        aria-current="page"
                        exact
                        to="/home"
                        className="nav-link"
                        activeClassName="menu_active"
                      >
                        Home
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        // activeClassName="menu_active"

                        aria-current="page"
                        exact
                        to="/temple"
                        className="nav-link"
                        activeClassName="menu_active"
                      >
                        Temple
                      </NavLink>
                    </li>
                    <li class="nav-item dropdown">
                      <a
                        class="nav-link dropdown-toggle"
                        href="#"
                        id="navbarDropdown"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Dropdown
                      </a>
                      <div
                        class="dropdown-menu"
                        aria-labelledby="navbarDropdown"
                      >
                        <a class="dropdown-item" href="/chardham">
                          Chardham
                        </a>
                        <a class="dropdown-item" href="/jyotirlinga">
                          JyotirLinga
                        </a>
                        <a class="dropdown-item" href="/shkathipeeth">
                          ShaktiPeeth
                        </a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="#">
                          Something else here
                        </a>
                      </div>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        aria-current="page"
                        exact
                        to="/planner"
                        className="nav-link"
                        activeClassName="menu_active"
                      >
                        Planner
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        activeClassName="menu_active"
                        className="nav-link"
                        aria-current="page"
                        exact
                        to="/feedback"
                      >
                        Feedback
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <form class="form-inline">
                        <input
                          class="form-control mr-sm-2"
                          type="search"
                          placeholder="Search"
                          aria-label="Search"
                        />
                        {/* <button
                          class="btn btn-outline-success my-2 my-sm-0"
                          type="submit"
                        >
                          Search
                        </button> */}
                      </form>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
