import "./TempleAccordian.css";
import HotelDetails from "./HotelDetails";

function TempleAccordian({ history, howtoreach, stay, nearbyplaces, hotels }) {
  {
    hotels.map((element, index) => {
      console.log(" ---> {} ", index, element);
      <h2>element</h2>;
    });
  }
  return (
    <>
      <div className="col-md-11 pt-5 pt-lg-0">
        <div class="row">
          <div className="my-1">
            <h1 className="text-center">History</h1>
          </div>
          <div className="my-1">
            <h5 className="text-muted description">{history}</h5>
          </div>
          <div className="my-1">
            <h1 className="text-center">How to reach</h1>
          </div>
          <div className="my-1">
            <h5 className="text-muted description">{howtoreach}</h5>
          </div>
          <div className="my-1">
            <h1 className="text-center">Hotesl And Stay</h1>
          </div>
          <div className="my-1">
            <h5 className="text-muted description">{stay}</h5>
            {/* <h1 className="text-muted description">{hotels}</h1> */}
          </div>

          <div className="my-1">
            {hotels.map((element, index) => {
              <h5 className="text-muted description">
                <HotelDetails hotel={element} />
              </h5>;
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default TempleAccordian;
