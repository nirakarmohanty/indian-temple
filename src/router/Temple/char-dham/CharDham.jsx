import "./Chardham.css";
import puri_img from "../../../image/puri.jpg";
function CharDham(props) {
  return props.data.map((item) => {
    console.log(item.name);
    return (
      <>
        <div className="col-md-3 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
          <div class="col">
            <div class="card h-100">
              <img src={item.image} class="card-img-top" alt={item.alt} />
              <div class="card-body">
                <h5 class="card-title">{item.name}</h5>
                <p class="card-text ">{item.description}</p>
              </div>
              <div class="card-footer">
                <small class="text-muted">
                  <a href="#" class="card-link">
                    More detials
                  </a>
                </small>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  });
}

export default CharDham;
