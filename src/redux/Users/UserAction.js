import { ADD_USER, DELETE_USER, UPDATE_USER, FETCH_USER, ALERT_MESSAGE } from "../../redux/Types";
import { LABEL_USER } from '../../common/constant/LabelConstant';
import {
      LABEL_ERROR, SUCCRSS_USER_DELETE_DATA, ERROR_UNABLE_DELETE_DATA, ERROR_UNABLE_FETCH_DATA,
      ERROR_UNABLE_ADD_USER_DATA, SUCCRSS_USER_UPDATED_DATA, LABEL_UPDATE,SUCCRSS_USER_SAVE_DATA,LABEL_DELETE,ERROR_UNABLE_UPDATE_USER_DATA
} from "../../common/constant/AppConstant";
import UserApiService from "../../service/common/UserApiService";
export const adduser = (obj) => {
      return async (dispatch) => {
            try {
                  const response = await UserApiService.createNewUser(obj);
                  dispatch({
                        type: ADD_USER,
                        payload: response.data,
                  });
                  dispatch({
                        type: ALERT_MESSAGE,
                        payload: { isVisible: true, title: LABEL_USER, message: SUCCRSS_USER_SAVE_DATA }
                  });
            } catch (err) {
                  dispatch({
                        type: ALERT_MESSAGE,
                        payload: { isVisible: true, title: LABEL_ERROR, message: ERROR_UNABLE_ADD_USER_DATA }
                  });
            }
      }
};
export const updateUserObj = (obj) => {
      return async (dispatch) => {
            try {
                  const response = await UserApiService.updateUser(obj);
                  dispatch({
                        type: UPDATE_USER,
                        payload: response.data,
                  });
                  dispatch({
                        type: ALERT_MESSAGE,
                        payload: { isVisible: true, title: LABEL_UPDATE, message: SUCCRSS_USER_UPDATED_DATA }
                  });
            } catch (err) {
                  dispatch({
                        type: ALERT_MESSAGE,
                        payload: { isVisible: true, title: LABEL_ERROR, message: ERROR_UNABLE_UPDATE_USER_DATA }
                  });
            }
      }
};
export const RemoveUser = (id) => {
      return async (dispatch) => {
            try {
                  await UserApiService.deleteUser(id);
                  dispatch({
                        type: DELETE_USER,
                        payload: id,
                  });
                  dispatch({
                        type: ALERT_MESSAGE,
                        payload: { isVisible: true, title: LABEL_DELETE, message: SUCCRSS_USER_DELETE_DATA }
                  });
            } catch (err) {
                  console.log(err);
                  dispatch({
                        type: ALERT_MESSAGE,
                        payload: { isVisible: true, title: LABEL_ERROR, message: ERROR_UNABLE_DELETE_DATA }
                  });
            }
      }
};
export const getuser = () => {
      return async (dispatch) => {
            try {
                  const response = await UserApiService.getAlluser();
                  dispatch({
                        type: FETCH_USER,
                        payload: response.data,
                  });
            } catch (err) {
                  console.log(err);
                  dispatch({
                        type: ALERT_MESSAGE,
                        payload: { isVisible: true, title: LABEL_ERROR, message: ERROR_UNABLE_FETCH_DATA }
                  });
            }
      }
};

