import { templeHeading } from "../../../data/temple-heading";
function TempleShakthiPeeth() {
  return (
    <>
      <section id="header">
        <div className="container-fluid nav_bg">
          <div className="row">
            <div className="col-10 mx-auto">
              <h1 className="top-spacing">
                <strong className="brand-name">
                  {templeHeading[2].heading}
                </strong>
              </h1>
              <p class="text-decoration-none">{templeHeading[2].description}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default TempleShakthiPeeth;
