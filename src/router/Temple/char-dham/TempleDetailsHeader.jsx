import { useLocation } from "react-router-dom";
import "./Chardham.css";
const TempleDetilasHeader = () => {
  const location = useLocation();
  const name = location.state?.name;
  const description = location.state?.description;

  return (
    <>
      <div className="col-md-11 pt-5 pt-lg-0">
        <div class="row">
          <div className="my-5">
            <h1 className="text-center">{name}</h1>
          </div>
          <div className="my-2">
            <h5 className="text-muted description">{description}</h5>
            <hr class="border border-primary border-1 opacity-50"></hr>
          </div>
        </div>
      </div>
    </>
  );
};

export default TempleDetilasHeader;
