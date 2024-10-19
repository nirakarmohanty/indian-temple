import CharDham from "./CharDham";
import { chardhamData } from "../../../data/char-dham-data";
import { templeHeading } from "../../../data/temple-heading";
function TempleChardham() {
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
              <hr class="hr" />
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
      </section>
    </>
  );
}

export default TempleChardham;
