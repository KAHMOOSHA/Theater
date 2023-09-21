import React, { useState } from "react";
import "./gallery.css";
import Navbar from "../../components/navBar";
import Modal from "react-bootstrap/Modal";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

//imgaes

const CustomGallery = () => {
  const images = [
    "https://mdbootstrap.com/img/Photos/Others/images/76.jpg",
    "https://mdbootstrap.com/img/Photos/Others/images/75.jpg",
    "https://mdbootstrap.com/img/Photos/Others/images/74.jpg",
    "https://mdbootstrap.com/img/Photos/Others/images/72.jpg",
    "https://mdbootstrap.com/img/Photos/Others/images/71.jpg",
    "https://mdbootstrap.com/img/Photos/Others/images/70.jpg",
    "https://mdbootstrap.com/img/Photos/Others/images/68.jpg",
    "https://mdbootstrap.com/img/Photos/Others/images/67.jpg",
    "https://mdbootstrap.com/img/Photos/Others/images/66.jpg",
    "https://mdbootstrap.com/img/Photos/Others/images/65.jpg",
    "https://mdbootstrap.com/img/Photos/Others/images/64.jpg",
    "https://mdbootstrap.com/img/Photos/Others/images/63.jpg",
    "https://mdbootstrap.com/img/Photos/Others/images/62.jpg",
    "https://mdbootstrap.com/img/Photos/Others/images/61.jpg",
    "https://mdbootstrap.com/img/Photos/Others/images/60.jpg",
    "https://mdbootstrap.com/img/Photos/Others/images/59.jpg",
    "https://mdbootstrap.com/img/Photos/Others/images/58.jpg",
  ];
  const [lgShow, setLgShow] = useState(false);
  const [index, setIndex] = useState(0); //to keep track of the index of the image clicked

  const handleImageClick = (key) => {
    console.log("Clicked image key:", key);
    setLgShow(true);
    setIndex(key);
  };

  // const handleNext = () => {
  //   setIndex((index) => index + 1);
  // };

  // const handlePrev = () => {
  //   setIndex((index) => index - 1);
  // };

  return (
    <>
      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Body>
          <img src={images[index]} alt="event" />
          {/* <span className="next"></span>
          <span className="prev"> </span> */}
        </Modal.Body>
      </Modal>

      <Navbar />
      <div className="Img__holder">
        <div className="background">
          <h1>Gallery</h1>
          <div className="image_items">
            {images.map((x, i) => (
              <div key={i} className="image_item">
                <LazyLoadImage
                  src={images[i % images.length]}
                  alt="event"
                  effect="blur"
                  key={i}
                  onClick={() => handleImageClick(i)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomGallery;
