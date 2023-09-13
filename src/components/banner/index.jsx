import React from "react";
import "./banner.css";
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";
// import Spinner from "react-bootstrap/Spinner";
import "bootstrap-icons/font/bootstrap-icons.css";

import img1 from "../media/main1.jpg";
import img2 from "../media/main2.jpg";
import img3 from "../media/main3.jpg";
import img4 from "../media/main4.jpg";
import img5 from "../media/main5.jpg";

const Banner = () => {
  return (
    <div className="main__Banner">
      <Carousel fade interval={5000}>
        <Carousel.Item>
          <img src={img1} alt="" />
          <div className="overlay">
            <h1>All That's Left To Me </h1>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <img src={img2} alt="" />
          <div className="overlay">
            <ul>
              <li>
                <i className="bi bi-clock"></i>
                <p>5:30 PM</p>
              </li>
              <li>
                <i className="bi bi-calendar2-week"></i>
                <p>2024/10/15</p>
              </li>
              <li>
                <i className="bi bi-geo-alt"></i>
                <p>Italy - Milano</p>
              </li>
            </ul>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <img src={img3} alt="" />
          <div className="overlay"></div>
        </Carousel.Item>
        <Carousel.Item>
          <img src={img4} alt="" />
          <div className="overlay"></div>
        </Carousel.Item>
        <Carousel.Item>
          <img src={img5} alt="" />
          <div className="overlay"></div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
