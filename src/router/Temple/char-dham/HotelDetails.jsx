import { useState } from "react";
const HotelDetails = (props) => {
  debugger;
  const [data, setData] = useState(props.hotel);
  console.log(data);
  return (
    <>
      {
        <div className="my-1">
          <h1>Mi Casa</h1>
          <p>This is my house yall!</p>
        </div>
      }
    </>
  );
};
export default HotelDetails;
