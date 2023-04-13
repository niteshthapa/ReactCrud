import React, { useState } from 'react';
import httpPromise from "../../../service/common/httpPromise";
const Spinner = () => {
    const [loading, setLoading] = useState(false);
    httpPromise.interceptors.request.use(function (config) {
        setLoading(true)
        return config;
    }, function (error) {
        setLoading(false)
        return Promise.reject(error);
    });
    httpPromise.interceptors.response.use(function (response) {
        setLoading(false)
        return response;
    }, function (error) {
        setLoading(false)
        return Promise.reject(error);
    });
    return (
        loading && <div className="spinner-border position-absolute" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
    )
}
export default Spinner;
