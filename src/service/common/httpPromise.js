import React from 'react';
import axios from "axios";
import { ServiceConstant } from "../../common/constant/ServiceConstant";
const httpPromise = axios.create({
    baseURL: ServiceConstant.API_PATH,
});

export default httpPromise;
