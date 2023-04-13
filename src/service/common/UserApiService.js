import { ServiceConstant } from "../../common/constant/ServiceConstant";
import httpPromise from "./httpPromise";
class UserService {
    getAlluser() {
        return httpPromise.get(ServiceConstant.API_UNIQUE_CODE + 'user');
    }
    createNewUser(obj) {
        return httpPromise.post(ServiceConstant.API_UNIQUE_CODE + 'user', obj);
    }
    updateUser(obj) {
        return httpPromise.put(ServiceConstant.API_UNIQUE_CODE + 'user/' + obj.id, obj);
    }
    deleteUser(id) {
        return httpPromise.delete(ServiceConstant.API_UNIQUE_CODE + 'user/' + id);
    }
}

export default new UserService();
