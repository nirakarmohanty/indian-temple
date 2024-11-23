import { NavLink } from "react-router-dom";
import "./Navbar.css";
import React, { useState } from "react";

function Navbar() {
  const [isChecked, setIsChecked] = useState(false);
  const [isOpened, setIsOpened] = useState(false);

  function toggle() {
    setIsOpened((isOpened) => !isOpened);
    changeTheme();
  }

  const toggleCheck = () => {
    setIsChecked(!isChecked);
    //handleClick();
    changeTheme();
  };
  // const checkbox = isChecked ? selected : deselected;

  const changeTheme = () => {
    console.log("Click happened");
    debugger;
    var element = document.body;
    element.dataset.bsTheme =
      element.dataset.bsTheme == "light" ? "dark" : "light";
  };
  const changeImage = () => {
    debugger;
    var image = document.getElementById("light");
    image.id == "light"
      ? (image.value = '<i id="dark" class="bi bi-moon"></i>')
      : (image.value = '<i id="light" class="bi bi-sun"></i>');
  };

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
                  IndianPilgrimages
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
                  </ul>
                </div>
                <div>
                  {!isOpened && (
                    <i
                      id="dark"
                      class="bi bi-sun image-color"
                      onClick={() => toggle()}
                    ></i>
                  )}
                  {isOpened && (
                    <i
                      id="light"
                      class="bi bi-moon image-color"
                      onClick={() => toggle()}
                    ></i>
                  )}
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
