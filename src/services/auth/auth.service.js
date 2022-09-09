
import axios from 'axios';
import Util from '../../util/common';

const domain = process.env.NODE_ENV !== 'production' ? process.env.REACT_APP_REMOTE_HOST : process.env.REACT_APP_LOCAL_HOST;

const login = (data) => {
    return axios.post(`${domain}/api/user/login`, data);
}

const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("user"));
};

const getAllUsers = () => {
    return axios.get(`${domain}/api/user/getUsers`);
}

const getVisitorPurpose = () => {
    return axios.get(`${domain}/api/visitor/getVisitorPurpose`)
}

const logout = () => {
    localStorage.removeItem("user");
};

const addVisitor = (data) => {
    const token = Util.getToken();
    const config = { headers: { Authorization: `Bearer ${token}` } }
    return axios.post(`${domain}/api/visitor/createVisitors`, data, config);
}


const AuthService = {
    login,
    getCurrentUser,
    logout,
    addVisitor,
    getAllUsers,
    getVisitorPurpose
}
export default AuthService;
