import "./TempleAccordian.css";
function HotelDetails(props) {
  return (
    <>
      {props.hotelname.map((element, index) => (
        <div className="my-2">
          <h5 className="text-muted description fs-4 text-success-emphasis">
            {element.name}
          </h5>
          <h5 className="text-muted description">{element.description}</h5>
        </div>
      ))}
      ;
    </>
  );
}
export default HotelDetails;
