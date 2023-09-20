import React from "react";
import Navbar from "../../components/navBar";
import Banner from "../../components/banner";
import SolidImage from "../../components/Solid-image/SolidImage";
import Video from "../../components/Video/Video";
// import ReactPlayer from "react-player";
const Home = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <div
        className="content_container"
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "0 10%",
          gap: "2rem",
        }}
      >
        <SolidImage />
        <Video />
      </div>
    </>
  );
};

export default Home;
