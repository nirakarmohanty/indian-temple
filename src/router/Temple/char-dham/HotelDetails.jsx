function HotelDetails(props) {
  debugger;
  return (
    <>
      {props.hotelname.map((element, index) => (
        <div className="my-2">
          <h5 className="text-muted description">{element.name}</h5>
        </div>
      ))}
      ;
    </>
  );
}
export default HotelDetails;
