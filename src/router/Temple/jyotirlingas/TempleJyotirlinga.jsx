import JyotirLinga from "./JyotirLinga";
import { jyotirlingaData } from "../../../data/jyotir-linga-data";
import { templeHeading } from "../../../data/temple-heading";
function TempleJyotirlinga() {
  return (
    <>
      <div className="container-fluid nav_bg">
        <div className="row">
          <div className="col-10 mx-auto">
            <h1 className="brand-name-spacing">
              <strong className="brand-name">{templeHeading[1].heading}</strong>
            </h1>
            <hr class="hr" />
            <p class="text-decoration-none">{templeHeading[1].description}</p>
            <div className="row">
              <JyotirLinga
                heading="Jyotir Linga in India"
                data={jyotirlingaData}
              ></JyotirLinga>
            </div>
            <div>Image Source: Google Images</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TempleJyotirlinga;
