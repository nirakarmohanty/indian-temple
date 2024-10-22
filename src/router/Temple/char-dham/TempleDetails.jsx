//import { useState } from "react";
import { useLocation } from "react-router-dom";
import "./Chardham.css";
import TempleDetilasHeader from "./TempleDetailsHeader";
import charDhamDetailsData from "../../../data/chardham-details-data.json";
import TempleAccordian from "./TempleAccordian";
const TempleDetilas = () => {
  console.log(charDhamDetailsData);
  const oneData = charDhamDetailsData;
  //const [data, setData] = useState(charDhamDetailsData);

  const location = useLocation();
  const nameTirtha = location.state?.name;

  const dataSet = oneData.find((element) => element.name === nameTirtha);

  return (
    <>
      <div className="conatiner-fluid">
        <div className="container-fluid">
          <TempleDetilasHeader />
        </div>
        <div className="container-fluid">
          {/* <TempleAccordian {...dataSet} /> */}
          <TempleAccordian selecctedData={dataSet} />
        </div>
      </div>
      ;{}
    </>
  );
};

export default TempleDetilas;
