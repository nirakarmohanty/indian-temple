import "./Temple.css";
import CharDham from "./char-dham/CharDham";
import { chardhamData } from "../../data/char-dham-data";

function Temple() {
  return (
    <>
      <section id="header">
        <div className="container-fluid nav_bg">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <h1>
                  <strong className="brand-name">Char Dham in India</strong>
                </h1>

                <div className="col-md-3 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <CharDham
                    name={chardhamData[0].name}
                    description={chardhamData[0].description}
                    image={chardhamData[0].image}
                  ></CharDham>
                </div>
                <div className="col-md-3 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <CharDham
                    name={chardhamData[1].name}
                    description={chardhamData[1].description}
                    image={chardhamData[1].image}
                  ></CharDham>
                </div>
                <div className="col-md-3 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <CharDham
                    name={chardhamData[2].name}
                    description={chardhamData[2].description}
                    image={chardhamData[2].image}
                  ></CharDham>
                </div>
                <div className="col-md-3 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <CharDham
                    name={chardhamData[3].name}
                    description={chardhamData[3].description}
                    image={chardhamData[3].image}
                  ></CharDham>
                </div>
              </div>
              <hr class="hr" />
              <div className="row">
                <div className="col-md-4 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h1>
                    <strong className="brand-name">
                      Jyotirlingas in India
                    </strong>
                  </h1>
                </div>
              </div>
              <hr class="hr" />
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h1>
                    <strong className="brand-name">
                      Shakti Peetha in India
                    </strong>
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Temple;
