import styles from "./modal-overlay.module.css"
import PropTypes from "prop-types";

export const ModalOverlay = ({closeModal}) => {
    return <div>
        <div className={styles.overlay} onClick={closeModal}></div>
    </div>
}

ModalOverlay.propTypes = {
    closeModal: PropTypes.func.isRequired
}
