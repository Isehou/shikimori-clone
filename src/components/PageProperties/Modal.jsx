import React from "react";
import "./modal.css";

const Modal = ({ isOpen, changeModalVisible, children }) => {
  return (
    <div
      className={isOpen ? "modal active" : "modal"}
      onClick={() => {
        changeModalVisible(false);
      }}
    >
      <div className="modal_content" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export default Modal;
