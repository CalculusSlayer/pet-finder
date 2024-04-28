import React from "react";
import { Link } from "react-router-dom";
import newImage from '.././images/20121205_fish_flood_plain_9769.jpg';

function Posts() {
  return (
    <div className="home">
      <div class="container">
        <Link to="/blog/this-is-a-post-title">
          <div class="row align-items-center my-5">
            <div class="col-lg-7">
            <img
              className="img-fluid rounded mb-4 mb-lg-0 mx-auto d-block"
              src={newImage}
              alt=""
              style={{ maxWidth: '100%' }}
            />
            </div>
            <div class="col-lg-5">
              <h1 class="font-weight-light">Swim Shady</h1>
              <p>
                Will the real Swim Shady please stand up?
                Help! I've lost my owner around the UC Davis campus. Please help me find my way back home.
              </p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Posts;
