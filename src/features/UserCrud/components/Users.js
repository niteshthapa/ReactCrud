import React, { useEffect, useState, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LABEL_USER_NAME, LABEL_EMAIL } from '../../../common/constant/LabelConstant';
import { BUTTON_CANCEL, BUTTON_ADD, BUTTON_DELETE, BUTTON_EDIT, BUTTON_UPDATE } from '../../../common/constant/ButtonConstant';
import { adduser, RemoveUser, updateUserObj, getuser } from '../../../redux/Users/UserAction';
import { useConfirm } from '../../../shared/components/ui/ConfirmBox';

export default function Users() {
  const confirm = useConfirm();
  const [inputVal, setInputVal] = useState({ name: "", email: "" });
  const [editUserObj, setEditUserObj] = useState(null);
  const dispatch = useDispatch();
  const selector = useSelector(state => state.UserReducer);
  useEffect(() => {
    dispatch(getuser())
  }, [])
  const onChangeUserName = (e) => {
    setInputVal(prevObj => {
      return {
        ...prevObj,
        name: e.target.value
      }
    });
  }
  const onChangeUserEmail = (e) => {
    setInputVal(prevObj => {
      return {
        ...prevObj,
        email: e.target.value
      }
    });
  }
  const editUser = (userObj) => {
    setEditUserObj(userObj)
    setInputVal(prevObj => {
      return {
        ...prevObj,
        name: userObj.name,
        email: userObj.email,
      }
    });
  }
  const onCancel = () => {
    setEditUserObj(null);
    setInputVal({ name: "", email: "" })
  }
  const onSubmit = (e) => {
    if (editUserObj !== null) {
      editUserObj.name = inputVal.name;
      editUserObj.email = inputVal.email
      dispatch(updateUserObj(editUserObj))

    } else {
      dispatch(adduser(inputVal))
    }
    e.preventDefault()
    setInputVal({ name: "", email: "" })
    setEditUserObj(null);
  }
  const onDelete = async (id) => {
    let consent = await confirm()
    if (consent) {
      dispatch(RemoveUser(id))
    }
    setInputVal({ name: "", email: "" })
  }
  return (
    <>  <form onSubmit={onSubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label mb-0">{LABEL_USER_NAME}</label>
        <input type="text" onChange={onChangeUserName} value={inputVal.name} className="form-control" name="name" aria-describedby={LABEL_USER_NAME} />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label mb-0">{LABEL_EMAIL}</label>
        <input type="email" onChange={onChangeUserEmail} value={inputVal.email} className="form-control" name="email" aria-describedby={LABEL_EMAIL} />
      </div>
      <button type="submit" className="btn btn-primary me-1">
        {
          editUserObj !== null ? BUTTON_UPDATE : BUTTON_ADD}
      </button>
      {
        editUserObj !== null && <button type="button" onClick={onCancel} className="btn btn-primary">{BUTTON_CANCEL}</button>}
    </form>

      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th width="120" ></th>
            <th width="120"></th>
          </tr>
        </thead>
        <tbody>
          {
            selector.user.map(user => {
              return <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td><button type="button" className="btn btn-primary" onClick={() => { editUser(user) }}>{BUTTON_EDIT}</button></td>
                <td><button type="button" className="btn btn-secondary" onClick={() => { onDelete(user.id) }}>{BUTTON_DELETE}</button></td>
              </tr>
            })
          }
        </tbody>
      </table>
    </>
  )
}
