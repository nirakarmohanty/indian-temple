import { NavLink } from "react-router-dom";
import HomeCarousel from "./HomeCarousel";
import RegionTemple from "./region/RegionTemple";
import "./Home.css";

function Home() {
  return (
    <>
      <div id="header" className="d-flex align-items-center">
        <div className="container-fluid nav_bg">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h2>
                    <strong className="brand-name">Indian Pilgrimages</strong>
                  </h2>
                  <h2>
                    <strong className="brand-name">
                      Where Devotion Meets Destination
                    </strong>
                    <br></br>
                    Explore India's Holy Shrines
                    <strong className="brand-name"></strong>
                  </h2>
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
                  <HomeCarousel />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div id="header" className="d-flex align-items-center">
        <div class="container">
          <div class="row">
            <RegionTemple />
            <RegionTemple />
            <RegionTemple />
            <RegionTemple />
            <RegionTemple />
            <RegionTemple />
            <RegionTemple />
          </div>
        </div>
      </div> */}
      <div id="header" className="align-items-center">
        <div class="container-fluid">
          <div class="container-sm px-4">
            <div class="row gx-5">
              <div class="col-md-6">
                <div class="ps-5 ps-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </div>
              </div>
              <div class="col">
                <div class="ps-3">
                  <RegionTemple />
                </div>
              </div>
            </div>
          </div>
          <div class="container px-4">
            <div class="row gx-5">
              <div class="col">
                <div class="p-3">
                  <RegionTemple />
                </div>
              </div>
              <div class="col">
                <div class="p-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
