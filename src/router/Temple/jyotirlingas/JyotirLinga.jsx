import { Link } from "react-router-dom";
import "./JyotirLinga.css";
function JyotirLinga(props) {
  return props.data.map((item) => {
    console.log(item.name);
    return (
      <>
        <div className="col-md-4 pt-5 pt-lg-4 order-2 order-lg-1 d-flex justify-content-center flex-column">
          <div class="col">
            <div class="card border border-primary rounded-start shadow align-items-stretch">
              <img
                src={item.image}
                class="card-img-top img-resize"
                alt={item.alt}
              />
              <div class="card-body">
                <h5 class="card-title text-primary-heading">
                  <button
                    type="button"
                    class="btn btn-outline-secondary text-primary-heading"
                  >
                    {item.id}
                  </button>
                  {item.name}
                </h5>
                <h5 class="card-title text-shortdescription">
                  {item.shortDescription}
                </h5>
                <p class="card-text trim-text">{item.description}</p>
              </div>
              <div class="card-footer">
                <small class="text-muted">
                  <Link
                    to={"/temple-details"}
                    state={{ name: item.name, description: item.description }}
                  >
                    More Details ...
                  </Link>
                </small>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  });
}
export default JyotirLinga;
