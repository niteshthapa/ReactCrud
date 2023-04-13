import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ReactDOM from 'react-dom';
import { BUTTON_OK } from '../../../common/constant/ButtonConstant';
import { Alertfn } from '../../../redux/AlertMessage/AlertMessageAction';

const AlertBox = () => {
    const selector = useSelector(state => state.AlertMessageReducer);
    console.log(selector)
    const dispatch = useDispatch();
    const [showMessage, setShowMessage] = useState(selector.isVisible);
    const [title, setTitle] = useState("Error");
    const [type, setType] = useState("");
    const [message, setMessage] = useState("Server error please try again");
    useEffect(() => {
        setShowMessage(selector.isVisible);
        setTitle(selector.title);
        setMessage(selector.message);
        if (selector.isVisible === false) {
            document.querySelector(".modal-backdrop")?.remove()
        }
    }, [selector.isVisible])
    if (showMessage) {
        let div = document.createElement("div");
        div.classList.add("modal-backdrop");
        div.classList.add("show");
        document.body.appendChild(div);
    } else {
        document.querySelector(".modal-backdrop")?.remove()
    }
    return (
        <>
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
                                <button type="button" className="btn btn-secondary" onClick={() => { dispatch(Alertfn({ isVisible: false, title: "", message: "" })) }}>{BUTTON_OK}</button>
                            </div>
                        </div>
                    </div>
                </div>, document.getElementById('modal-root'))
            }
        </>

    )
}
export default AlertBox
