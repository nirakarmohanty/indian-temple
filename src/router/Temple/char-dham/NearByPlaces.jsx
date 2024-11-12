import "./TempleAccordian.css";
function NearByPlaces(props) {
  debugger;
  return (
    <>
      <div>
        <span>
          <h3 className="my-2 text-center nearbyplaces-left-banner">
            {/* Nearby Places */}
          </h3>
        </span>
      </div>
      {props.nearbyplaces?.map((element, index) => (
        <div class="card card-style my-2 border border-info-subtle">
          <a href="#" class="pe-auto">
            <img
              src={element.image}
              class="card-img-top img-thumbnail"
              alt="..."
            />
          </a>
          <div class="card-body">
            <h5 class="card-title nearbyplaces-left-banner">{element.name}</h5>
            <p class="card-text nearbyplaces-left-banner">
              {element.description}
            </p>
            <a href="#" class="btn btn-primary">
              Know More
            </a>
          </div>
        </div>
      ))}
    </>
  );
}
export default NearByPlaces;
