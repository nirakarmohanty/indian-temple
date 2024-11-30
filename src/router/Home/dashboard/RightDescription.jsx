import DashboardTemple from "./DashboardTemple";
function RightDescription(props) {
  return props.data.map((item) => {
    console.log(item.name);
    return (
      <>
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
  });
}

export default RightDescription;
