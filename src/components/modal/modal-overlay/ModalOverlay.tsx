import styles from "./modal-overlay.module.css";
import { FC } from "react";
import { TModalOverlay } from "../../../types";

export const ModalOverlay: FC<TModalOverlay> = ({ closeModal }) => {
  return (
    <div>
      <div className={styles.overlay} onClick={closeModal}></div>
    </div>
  );
};
