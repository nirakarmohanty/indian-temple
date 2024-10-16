import "./Temple.css";
import CharDham from "./char-dham/CharDham";
import { chardhamData } from "../../data/char-dham-data";
import { templeHeading } from "../../data/temple-heading";
function Temple() {
  return (
    <>
      <section id="header">
        <div className="container-fluid nav_bg">
          <div className="row">
            <div className="col-10 mx-auto">
              <h1>
                <strong className="brand-name">
                  {templeHeading[0].heading}
                </strong>
              </h1>
              <p class="text-decoration-none">{templeHeading[0].description}</p>
              <div className="row">
                <CharDham
                  heading="Char Dham in India"
                  data={chardhamData}
                ></CharDham>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid nav_bg">
          <div className="row">
            <div className="col-10 mx-auto">
              <h1 className="top-spacing">
                <strong className="brand-name">
                  {templeHeading[1].heading}
                </strong>
              </h1>
              <p class="text-decoration-none">{templeHeading[1].description}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Temple;
