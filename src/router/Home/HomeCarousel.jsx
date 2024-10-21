import rameswaram from "../../image/rameswaram.jpg";
import puri from "../../image/puri.jpg";
import dwaraka from "../../image/dwarka.jpg";
import badrinath from "../../image/Badrinath_Temple.jpg";

function HomeCarousel() {
  return (
    <>
      <div
        id="carouselExampleIndicators"
        class="carousel slide "
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div className="image-wrapper">
              <img src={rameswaram} class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-caption d-none d-md-block">
              <h5>Rameswar A shrine to Shiva</h5>
              <p>
                Some representative placeholder content for the first slide.
              </p>
            </div>
          </div>
          <div class="carousel-item">
            <div className="image-wrapper">
              <img src={dwaraka} class="d-block w-100" alt="Dwaraka" />
            </div>
            <div class="carousel-caption d-none d-md-block">
              <h5>Dwaraka A shrine to Vishnu</h5>
              <p>
                Some representative placeholder content for the first slide.
              </p>
            </div>
          </div>
          <div class="carousel-item">
            <div className="image-wrapper">
              <img src={puri} class="d-block w-100" alt="puri" />
            </div>

            <div class="carousel-caption d-none d-md-block">
              <h5>Puri A shrine to Vishnu</h5>
              <p>
                Some representative placeholder content for the first slide.
              </p>
            </div>
          </div>
          <div class="carousel-item">
            <div className="image-wrapper">
              <img src={badrinath} class="d-block w-100" alt="..." />
            </div>

            <div class="carousel-caption d-none d-md-block">
              <h5>Badrinath A shrine to Vishnu</h5>
              <p>
                Some representative placeholder content for the first slide.
              </p>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}

export default HomeCarousel;
