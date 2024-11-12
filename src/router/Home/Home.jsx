import { NavLink } from "react-router-dom";
import HomeCarousel from "./HomeCarousel";
import "./Home.css";
function Home() {
  return (
    <>
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid nav_bg">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h1>
                    {/* Find details about */}
                    <strong className="brand-name"> Indian Temples </strong>
                    <br></br>
                    From all corner of
                    <strong className="brand-name"> India</strong>
                  </h1>
                  <h2>
                    <hr class="hr" />
                    <p className="hindi-text">
                      सर्वधर्मान्परित्यज्य मामेकं शरणं व्रज | <br></br>अहं त्वां
                      सर्वपापेभ्यो मोक्षयिष्यामि मा शुच: || 18.66||
                    </p>
                    <hr class="hr" />
                    <hr class="hr" />
                    <p className="hindi-text1">
                      sarva-dharmān parityajya mām ekaṁ śharaṇaṁ vraja <br></br>
                      ahaṁ tvāṁ sarva-pāpebhyo mokṣhayiṣhyāmi mā śhuchaḥ
                    </p>
                    <hr class="hr" />
                  </h2>
                  <div className="mt-3">
                    <NavLink to="/temple" className="btn-get-started">
                      Explore
                    </NavLink>
                  </div>
                </div>
                <div className="col-lg-6  order-1 order-lg-2 header-imag d-flex justify-content-center flex-column">
                  {/* <img
                    src={web}
                    className="img-fluid animated"
                    alt="home img"
                  /> */}

                  <HomeCarousel />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
