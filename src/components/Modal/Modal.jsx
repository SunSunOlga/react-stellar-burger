import React from 'react';
import ReactDOM, { createPortal } from 'react-dom';
import styleModal from '../Modal/Modal.module.css';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from "prop-types";
import { ingredientPropType } from '../../utils/prop-types'


const modalRoot = document.getElementById("modal");

function Modal({ closeModal, children, headerModal = '' }) {

    function pressEsc(evt) {
        if (evt.key === 'Escape') {
            evt.preventDefault();
            closeModal();
        }
    }

    function clickOverlay() {
        closeModal();
    }

    React.useEffect(() => {
        document.addEventListener('keydown', pressEsc);
        return () => {
            document.removeEventListener('keydown', pressEsc);
        };
    }, []);


    return ReactDOM.createPortal(
        <div className={`${styleModal.modalBase} `}>
        <div className={`${styleModal.overlayModal} `} onClick={clickOverlay}>
          </div>
           
                <div className={styleModal.modalCard}>
                    <h1 className={`${styleModal.headerModal} text text_type_main-large`}>{headerModal}</h1>
                    <div className={`${styleModal.closeIcon} `}>
                        <CloseIcon type="primary" onClick={closeModal} />

                    </div>
                    {children}
                </div>
           
        </div>,
        modalRoot

    );
};

export default Modal;

Modal.propTypes = {
    children: PropTypes.element,
    closeModal: PropTypes.func,
}