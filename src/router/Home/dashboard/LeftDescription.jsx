import DashboardTemple from "./DashboardTemple";
function LeftDescription(props) {
  console.log(props?.data);
  return props?.data?.map((item) => {
    console.log(item.name);

    return (
      <>
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
  });
}
export default LeftDescription;
