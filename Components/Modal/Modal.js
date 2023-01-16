import Link from "next/link";
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { GrClose } from "react-icons/gr";
import classes from "../../styles/Modal.module.css";

const Modal = ({ show, children, onClose }) => {
  const [isBrowser, setIsBrowser] = useState(false);
  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const handleClose = (e) => {
    e.preventDefault();
    onClose();
  };

  const modalContent = show ? (
    <div className={classes.overlay}>
      <div className={classes.modal}>
        <div>
          <a href="#" onClick={handleClose}>
            <GrClose className={classes["close--modalBtn"]} />
          </a>
        </div>
        <div>{children}</div>
      </div>
    </div>
  ) : null;

  if (isBrowser) {
    return ReactDOM.createPortal(
      modalContent,
      document.getElementById("modal-root")
    );
  } else {
    return null;
  }
};

export default Modal;
