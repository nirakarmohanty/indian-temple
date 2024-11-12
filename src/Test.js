import React from "react";
import "@popperjs/core";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/js/dist/dropdown.js";
import puri_img from "../src/image/puri.jpg";
import rameswarma_img from "../src/image/rameswaram.jpg";
import dwaraka_img from "../src/image/dwarka.jpg";
import badrinath_img from "../src/image/Badrinath_Temple.jpg";

const Test = () => {
  return (
    <>
      <div class="container">
        <div className="my-5">
          <h1 className="text-center">Your Feedback </h1>
        </div>

        <div class="row">
          <div class="col-2 col-md-2 ">
            <div>
              <span>
                <h3 className="my-2 text-center"> Nearby Places</h3>
              </span>
              <div class="card card-style my-2 border border-info-subtle">
                <a href="#" class="pe-auto">
                  <img
                    src={puri_img}
                    class="card-img-top img-thumbnail"
                    alt="..."
                  />
                </a>

                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" class="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
              <div class="card card-style my-2">
                <img
                  src={puri_img}
                  class="img-fluid card-img-top img-thumbnail"
                  alt="..."
                />
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" class="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
              <div class="card card-style my-2">
                <img src={puri_img} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" class="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
              <div class="card card-style my-2">
                <img src={puri_img} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" class="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
              <div class="card card-style my-2">
                <img src={puri_img} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" class="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
            {/* <img src={puri_img} class="card-img-top image" alt="" />
            <img src={puri_img} class="card-img-top image" alt="" />
            <img src={puri_img} class="card-img-top" alt="" />
            <img src={puri_img} class="card-img-top" alt="" />
            <img src={puri_img} class="card-img-top" alt="" />
            <img src={puri_img} class="card-img-top" alt="" />
            <img src={puri_img} class="card-img-top" alt="" /> */}
          </div>
          <div class="col-8 col-md-8 border">
            .col-6 .col-md-4 .col-6 .col-md-4 .col-6 .col-md-4 .col-6 .col-md-4
            .col-6 .col-md-4 .col-6 .col-md-4 .col-6 .col-md-4 .col-6 .col-md-4
            .col-6 .col-md-4 .col-6 .col-md-4 .col-6 .col-md-4 .col-6 .col-md-4
            .col-6 .col-md-4 .col-6 .col-md-4 .col-6 .col-md-4 .col-6 .col-md-4
            .col-6 .col-md-4 .col-6 .col-md-4
          </div>
          <div class="col-2 col-md-2 border">
            .col-6 .col-md-3 .col-6 .col-md-3 .col-6 .col-md-3 .col-6 .col-md-3
            .col-6 .col-md-3 .col-6 .col-md-3 .col-6 .col-md-3 .col-6 .col-md-3
          </div>
        </div>
      </div>
    </>
  );
};

export default Test;
