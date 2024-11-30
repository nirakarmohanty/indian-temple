import DashboardTemple from "./DashboardTemple";
function DashboardDescription(props) {
  return props?.data?.map((item, index) => {
    if (index % 2 === 0) {
      return (
        <>
          <div className="container px-4 border-info text-black ">
            <div class="d-flex ">
              <div class="p-2 flex-fill fs-3 playwrite-hr-lijeva-header-dashboard">
                {item?.name}
              </div>
            </div>
          </div>
          <div class="container px-4">
            <div class="row gx-5">
              <div class="col">
                <div class="p-3">
                  <DashboardTemple dashboardTempleData={item} />
                </div>
              </div>
              <div class="col">
                <div class="p-3">
                  <p class="import-cards-text">{item?.description}</p>
                </div>
              </div>
            </div>
          </div>
        </>
      );
    } else {
      return (
        <>
          <div className="container px-10 text-black ">
            <div class="d-flex ">
              <div class="p-2 flex-fill  fs-3 playwrite-hr-lijeva-header-dashboard">
                {item?.name}
              </div>
            </div>
          </div>
          <div class="container-sm px-4">
            <div class="row gx-5">
              <div class="col-md-6">
                <div class="ps-5 ps-3">
                  <p class="import-cards-text">{item?.description}</p>
                </div>
              </div>
              <div class="col">
                <div class="ps-3">
                  <DashboardTemple dashboardTempleData={item} />
                </div>
              </div>
            </div>
          </div>
        </>
      );
    }
  });
}
export default DashboardDescription;
