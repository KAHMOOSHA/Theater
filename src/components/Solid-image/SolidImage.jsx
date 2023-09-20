import React from "react";
import "./solid-image.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import image from "../media/birds.png";

const SolidImage = () => {
  return (
    <div>
      {/* <h1 className="custom__h1">About</h1> */}
      <div className="image_container">
        <LazyLoadImage src={image} height={image.height} width={image.width} />
      </div>
    </div>
  );
};

export default SolidImage;
