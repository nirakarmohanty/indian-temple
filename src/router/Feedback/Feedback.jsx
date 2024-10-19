import { useState } from "react";

const Feedback = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    feedback: "",
  });
  const formSubmit = () => {};

  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Your Feedback </h1>
      </div>
      <div className="container feedback_div">
        <div className="row">
          <div className="col-md-6 col-1- mx-auto">
            <form onSubmit={formSubmit}>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Your Name
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  name="name"
                  value={data.name}
                  onChange={InputEvent}
                  placeholder="Enter your name"
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput1"
                  name="email"
                  value={data.email}
                  onChange={InputEvent}
                  placeholder="name@example.com"
                />
              </div>

              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">
                  Feedback if any
                </label>
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  name="feedback"
                  value={data.feedback}
                  onChange={InputEvent}
                  rows="3"
                ></textarea>
              </div>
              <div class="col-12">
                <button class="btn btn-outline-primary" type="submit">
                  Submit form
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Feedback;
