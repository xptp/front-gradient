import React, { useState } from "react";
import Modal from "../../animation/modal";

const ImagesSlider = ({ img }) => {
  const [modalActive, setModalActive] = useState(false);
  return (
    <div className="main-img-container">
      {img.map((i) => {
        return (
          <img
            onClick={() => setModalActive(true)}
            key={i.id}
            className="more-img"
            src={i.images}
            alt="img error"
          />
        );
      })}
      <Modal active={modalActive} setActive={setModalActive} />;
    </div>
  );
};

export default ImagesSlider;
