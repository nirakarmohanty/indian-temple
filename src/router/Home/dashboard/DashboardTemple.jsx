import "./DashboardTemple.css";

function DashboardTemple(props) {
  debugger;
  return (
    <>
      {/* https://getbootstrap.com/docs/5.0/utilities/spacing/ */}
      <div class="col-sm-3 mt-3 ms-5">
        <div class="card card-width-dashboardTemple card-property">
          <img
            src={props?.dashboardTempleData?.image}
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title"></h5>
            <p class="card-text">Image Source: Google Images</p>
            {/* <a href="#" class="btn btn-primary"></a> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default DashboardTemple;
