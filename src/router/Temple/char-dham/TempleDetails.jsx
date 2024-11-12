//import { useState } from "react";
import { useLocation } from "react-router-dom";
import "./Chardham.css";
import TempleDetilasHeader from "./TempleDetailsHeader";
import charDhamDetailsData from "../../../data/chardham-details-data.json";
import TempleAccordian from "./TempleAccordian";
import NearByPlaces from "./NearByPlaces";
const TempleDetilas = () => {
  console.log(charDhamDetailsData);
  const oneData = charDhamDetailsData;
  //const [data, setData] = useState(charDhamDetailsData);

  const location = useLocation();
  const nameTirtha = location.state?.name;

  const dataSet = oneData?.find((element) => element?.name === nameTirtha);
  debugger;
  return (
    <>
      <div className="conatiner-fluid pt-5">
        <div className="container-fluid">
          <div class="row">
            <div class="col-2 col-md-2">
              <NearByPlaces nearbyplaces={dataSet?.nearbyplaces} />
            </div>

            <div class="col-8 col-md-8">
              <div className="container-fluid">
                <TempleDetilasHeader />
              </div>
              <TempleAccordian selecctedData={dataSet} />
            </div>
            <div class="col-2 col-md-2 border">jklgjsfdgsjfgsdf</div>
          </div>
        </div>
      </div>
      ;{}
    </>
  );
};

export default TempleDetilas;
