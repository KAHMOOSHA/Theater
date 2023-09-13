import "./imgHolder.css";
import img1 from "../media/All thats left to me - Odysseus Telemachus 02.jpg";
import img2 from "../media/All thats left to me - Odysseus Telemachus 02.jpg";
import img3 from "../media/All thats left to me - Odysseus Telemachus 02.jpg";
const ImgHolders = () => {
  return (
    <>
      <div className="Img__holder">
        <div className="background">
        <h1>Gallery</h1>
        <div className="image_items">
          <div className="item">
            <img src={img1} alt=""></img>
          </div>
          <div className="item">
            <img src={img2} alt=""></img>
          </div>
          <div className="item">
            <img src={img3} alt=""></img>
          </div>
          <div className="item">
            <img src={img3} alt=""></img>
          </div>
          <div className="item">
            <img src={img3} alt=""></img>
          </div>
          <div className="item">
            <img src={img3} alt=""></img>
          </div>
          <div className="item">
            <img src={img3} alt=""></img>
          </div>
          <div className="item">
            <img src={img3} alt=""></img>
          </div>
          <div className="item">
            <img src={img3} alt=""></img>
          </div>
          <div className="item">
            <img src={img3} alt=""></img>
          </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default ImgHolders;
