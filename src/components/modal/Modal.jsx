import ReactDOM from "react-dom";
import styles from "./modal.module.css";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { ModalOverlay } from "./modal-overlay/ModalOverlay";
import PropTypes from "prop-types";
import React from "react";

const modalRoot = document.getElementById("modal-root");
export const Modal = ({ children, title, isOpen, closeModal }) => {
  const handleKeydown = React.useCallback(
    (keydownEvent) => {
      if (keydownEvent.key === "Escape") {
        closeModal();
      }
    },
    [closeModal]
  );

  React.useEffect(() => {
    document.addEventListener("keydown", handleKeydown);
    return () => document.removeEventListener("keydown", handleKeydown);
  }, [closeModal, handleKeydown]);

  return ReactDOM.createPortal(
    <div className={`${styles.modal} ${isOpen && styles.opened}`}>
      <div className={styles.header}>
        {title && (
          <div className={`${styles.title} pt-10 ml-10 mr-10`}>
            <h2 className="text text_type_main-large">{title}</h2>
          </div>
        )}
        {children}
      </div>
      <button
        className={`${styles.btn} mr-10 mt-15`}
        type="button"
        onClick={closeModal}
      >
        <CloseIcon type="primary" />
      </button>

      <ModalOverlay closeModal={closeModal} />
    </div>,
    modalRoot
  );
};

Modal.propTypes = {
  children: PropTypes.element.isRequired,
  title: PropTypes.string,
  isOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
};
