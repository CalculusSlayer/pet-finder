import React from "react";
import newImage from './images/_MG_8100.jpg';

function Contact() {
  return (
    <div className="contact">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src={newImage}
              alt=""
              style={{ maxWidth: '40%' }}
            />
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-light">Contact</h1>
            <p>
              Created as a project for Hackathon 2024 at Hack Davis.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
