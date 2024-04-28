import React from "react";
import newImage from './images/20181121-campfiretilapia-01.jpg';

function About() {
  return (
    <div className="about">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src={newImage}
              alt=""
            />
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-light">About</h1>
            <p>
              We are a small group looking to help pets find their lost owners.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
