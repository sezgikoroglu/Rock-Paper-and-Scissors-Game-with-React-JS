import React, { useState } from 'react';
import close from "../style/images/icon-close.svg";
import rules from "../style/images/image-rules.svg";

const Modal = ({closeModal}) => {

    return (
    <div className={"modal-container"}>
            <div className="overlay" onClick={closeModal}>

            </div>
            <div className="modal-content">

                <div className="header-modal">
                    <h1>rules</h1>
                    <a href="#" onClick={closeModal}>
                        <img src={close}/>
                    </a>
                </div>

                <div className="body">
                    <img src={rules}/>
                </div>
            </div>
        </div>
  )
}

export default Modal