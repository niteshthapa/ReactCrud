import React, { useRef, useState, useContext } from 'react';
import ReactDOM from 'react-dom';
import ConfirmContext from '../../../common/context/ConfirmContext';
import { BUTTON_OK, BUTTON_CANCEL } from '../../../common/constant/ButtonConstant';
export function useConfirm() {
    return useContext(ConfirmContext)
}
const ConfirmBox = ({ children }) => {
const [showMessage, setShowMessage] = useState(false);
const [title, setTitle] = useState("");
const [message, setMessage] = useState("");
if (showMessage) {
    let div = document.createElement("div");
    div.classList.add("modal-backdrop");
    div.classList.add("show");
    document.body.appendChild(div);
} else {
    document.querySelector(".modal-backdrop")?.remove()
}
const checkConsent = useRef()
const confirm=({ title = 'Delete', message = 'Are you sure you want to delete this item?' } = {})=> {
    setShowMessage(true);
    setMessage(message);
    setTitle(title)
    return new Promise((resolve, reject) => {
        checkConsent.current = (choice) => {
            resolve(choice);
            setShowMessage(false);
        }
    })
}

return (
    <ConfirmContext.Provider value={confirm}>
        {children}
        {showMessage &&
            ReactDOM.createPortal(<div className="d-block modal fade show" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable" role="document">
                    <div className="modal-content shadow">
                        <div className={`modal-header py-1`}>
                            <h5 className="modal-title">{title}</h5>
                        </div>
                        <div className="modal-body text-center">
                            <p> {message}</p>
                        </div>
                        <div className="modal-footer justify-content-center py-1">
                            <button type="button" className="btn btn-secondary" onClick={() => checkConsent.current(true)}>{BUTTON_OK}</button>
                            <button type="button" className="btn btn-secondary" onClick={() => checkConsent.current(false)}>{BUTTON_CANCEL}</button>
                        </div>
                    </div>
                </div>
            </div>, document.getElementById('modal-root'))
        }
    </ConfirmContext.Provider>
)
}
export default ConfirmBox;
