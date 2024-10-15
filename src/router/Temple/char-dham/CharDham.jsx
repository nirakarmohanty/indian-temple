import "./Chardham.css";

function CharDham(props) {
  return (
    <>
      {/* <div id="container" className="chardham">
        <div class="card">
          <img
            className="img-property"
            src="https://images.unsplash.com/photo-1536323760109-ca8c07450053"
            alt="Lago di Braies"
          />
          <div class="card__details">
            <span class="tag">India</span>
            <span class="tag">Chardham</span>
            <div class="name">{props.name}</div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Consectetur sodales morbi dignissim sed diam pharetra vitae ipsum
              odio.
            </p>
            <button>Read more</button>
          </div>
        </div>
      </div> */}
      {/* <div class="container">
        <div class="row row-cols-4 row-cols-md-4 g-4">
          <div class="card h-100">
            <img
              src="https://images.unsplash.com/photo-1536323760109-ca8c07450053"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">{props.name}</h5>
              <p class="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
            <div class="card-footer">
              <small class="text-muted">Last updated 3 mins ago</small>
            </div>
          </div>
        </div>
      </div> */}

      <div class="col">
        <div class="card h-100">
          <img src={props.image} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">{props.name}</h5>
            <p class="card-text">{props.description}</p>
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
    </>
  );
}

export default CharDham;
