import React from "react";
import PureModal from "react-pure-modal";
import "react-pure-modal/dist/react-pure-modal.min.css";
import "./modal.css";
import { Link } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";

const Modal = ({ modal, setModal, content }) => {
  return (
    <>
      <PureModal
        isOpen={modal}
        // closeButton="x"
        // closeButtonPosition="bottom"
        onClose={() => {
          setModal(false);
          return true;
        }}
      >
        <div className="modal__img">
          <img src={content.img} alt="event" />
        </div>
        <div className="modal__content">
          <h1>{content.title}</h1>
          <p>{content.description}</p>
          <p>{content.NameOfCity}</p>
          <Link target="_blank" to={content.location}>
            <i className="bi bi-geo-alt-fill"></i>
            Stradanuova - Teatro Auditorium Manzoni - Bologna (BO)
          </Link>
        </div>
      </PureModal>
      ;
    </>
  );
};

export default Modal;
