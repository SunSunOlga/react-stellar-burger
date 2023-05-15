import React from 'react';
import ReactDOM, {createPortal} from 'react-dom';
import styleModal from '../Modal/Modal.module.css';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';


const modalRoot = document.getElementById("modal");

function Modal({  closeModal, children, headerModal, setIsModalOpen }) {

   
        return ReactDOM.createPortal(
            (
                <div className={`${styleModal.modalBase} `}>
                    <div className={`${styleModal.overlayModal} `} onClick={closeModal}></div>
                    <div className={styleModal.modalCard}>
                        <h1 className={`${styleModal.headerModal} text text_type_main-large`}>{headerModal}</h1>
                        <div className={`${styleModal.closeIcon} `}>
                            <CloseIcon type="primary" onClick={() => setIsModalOpen(false)}/>
    
                            </div>         
                        </div>
                       {children}
                   
    
                </div>
            
            ),modalRoot
        );
 

};

export default Modal;