import { NavLink } from "react-router-dom";
import HomeCarousel from "./HomeCarousel";
import "./Home.css";

import { dashboarddata } from "../../data/dashboard/dashboard-data";
import React, { useEffect, useState, useRef } from "react";
import DashboardDescription from "./dashboard/DashboardDescription";
function Home() {
  const leftDescriptionDataArray = [];
  const rightDescriptionDataArray = [];
  const [leftDescriptionData, setLeftDescriptionData] = useState(null);
  const [rightDescriptionData, setRightDescriptionData] = useState(null);
  const [error, setError] = useState(null); // To store errors if any
  const initialized = useRef(false);
  // useEffect(() => {
  //   // This function will run once the component is mounted (page load)

  //   const fetchData = async () => {
  //     try {
  //       dashboarddata.forEach((element, index) => {
  //         if (index % 2 === 0) {
  //           leftDescriptionDataArray.push(element);
  //         } else {
  //           rightDescriptionDataArray.push(element);
  //         }
  //       });
  //       setLeftDescriptionData(leftDescriptionDataArray);
  //       setRightDescriptionData(rightDescriptionDataArray);
  //     } catch (error) {
  //       setError(error.message); // Set error message if something goes wrong
  //     }
  //   };

  //   fetchData(); // Call the fetchData function when component is mounted
  // }, []); // Empty dependency array means this will run only once (on page load)

  useEffect(() => {
    console.log(dashboarddata);
    debugger;
    if (!initialized.current) {
      initialized.current = true;
      dashboarddata.forEach((element, index) => {
        if (index % 2 === 0) {
          leftDescriptionDataArray.push(element);
        } else {
          rightDescriptionDataArray.push(element);
        }
      });
      setLeftDescriptionData(leftDescriptionDataArray);
      setRightDescriptionData(rightDescriptionDataArray);
    }
  });
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

      <div id="header" className="align-items-center ">
        <section>
          <div class="container-fluid  colored-box">
            <header className="header-text-center">
              <h1>Take a deeper dive to explore temples</h1>
            </header>

            <div>
              <DashboardDescription data={dashboarddata}></DashboardDescription>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;
