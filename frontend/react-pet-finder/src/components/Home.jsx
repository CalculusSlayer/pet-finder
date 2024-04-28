import React from 'react';
import newImage from './images/_MG_7939 copy.jpg';

function Home() {
  return (
    <div className="home d-flex justify-content-center align-items-center">
      <div className="container">
        <div className="row align-items-center my-5">
          <div className="col-lg-7 text-center">
            <div className="text-center">
              <h1 className="font-weight-light">Home page</h1>
            </div>            
            <img
              className="img-fluid rounded mb-4 mb-lg-0 mx-auto d-block"
              src={newImage}
              alt=""
              style={{ maxWidth: '100%' }}
            />
          </div>
          <div className="col-lg-5 text-center">

            <p>
              This is the home page of our Pet Finder application.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;