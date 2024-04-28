import React, { useEffect } from "react";
import { useParams } from "react-router";
import newImage from '.././images/20121205_fish_flood_plain_9769.jpg';

function Post() {
  let { postSlug } = useParams();

  useEffect(() => {
    // Fetch post using the postSlug
  }, [postSlug]);

  return (
    <div className="home">
      <div class="container">
        <h1 className="mt-5">Swim Shady</h1>
        <img
              className="img-fluid rounded mb-4 mb-lg-0 mx-auto d-block"
              src={newImage}
              alt=""
              style={{ maxWidth: '100%' }}
            />
        <h6 className="mb-5">The post slug is, {postSlug}</h6>
        <p>
          Fishy fishy fish
        </p>
        <p>
          blub blub blub.
        </p>
        <p>
          splish splash sploosh.
        </p>
      </div>
    </div>
  );
}

export default Post;
