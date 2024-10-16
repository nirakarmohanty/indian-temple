import { chardhamData } from "../../../data/char-dham-data";
import { templeHeading } from "../../../data/temple-heading";
function TempleJyotirlinga() {
  return (
    <>
      <section id="header">
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

export default TempleJyotirlinga;
