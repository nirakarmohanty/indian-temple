import "./RegionTemple.css";
import chardham from "../../../image/char-dham.jpg";
function RegionTemple() {
  return (
    <>
      {/* https://getbootstrap.com/docs/5.0/utilities/spacing/ */}
      <div class="col-sm-3 mt-3 ms-5">
        <div class="card card-width-regiontemple">
          <img src={chardham} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title"></h5>
            <p class="card-text"></p>
            <a href="#" class="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default RegionTemple;
