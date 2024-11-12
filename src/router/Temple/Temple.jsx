import "./Temple.css";
import { NavLink } from "react-router-dom";
import { templeHeading } from "../../data/temple-heading";
function Temple() {
  return (
    <>
      <div id="header" class="row row-1 g-1 row-cols-md-1">
        {templeHeading?.map((element, index) => (
          <div className="container-fluid nav_bg">
            <div className="row card border border-2">
              <div className="col-10 mx-auto">
                <h1 className="top-spacing brand-name-spacing">
                  <strong className="brand-name">{element.heading}</strong>
                </h1>

                <p class="text-decoration-none">
                  {element.description}
                  <NavLink to={element.link}>More Details</NavLink>
                </p>
              </div>
            </div>
            <br></br>
          </div>
        ))}
      </div>
    </>
  );
}

export default Temple;
