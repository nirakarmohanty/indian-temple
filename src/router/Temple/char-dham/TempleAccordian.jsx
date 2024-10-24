import "./TempleAccordian.css";
import HotelDetails from "./HotelDetails";

function TempleAccordian(props) {
  return (
    <>
      <div className="col-md-11 pt-5 pt-lg-0">
        <div class="row">
          <div className="my-1">
            <h1 className="text-center">History</h1>
          </div>
          <div className="my-1">
            <h5 className="text-muted description">
              {props.selecctedData.history}
            </h5>
          </div>
          <div className="my-1">
            <h1 className="text-center">How to reach</h1>
          </div>
          <div className="my-1">
            <h5 className="text-muted description">
              {props.selecctedData.howtoreach}
            </h5>
          </div>
          <div className="my-1">
            <h1 className="text-center">Hotesl And Stay</h1>
          </div>
          <div className="my-1">
            <h5 className="text-muted description">
              {props.selecctedData.stay}
            </h5>
          </div>

          <HotelDetails hotelname={props.selecctedData.hotels} />
        </div>
      </div>
    </>
  );
}

export default TempleAccordian;
