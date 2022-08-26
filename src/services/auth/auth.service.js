
import axios from 'axios';
import Util from '../../util/common';

const login = (data) => {
    return axios.post("http://localhost:5000/api/user/login", data);
}

const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("user"));
};

const getAllUsers = () => {
    return axios.get("http://localhost:5000/api/user/getUsers");
}

const getVisitorPurpose = () => {
    return axios.get("http://localhost:5000/api/visitor/getVisitorPurpose")
}

const logout = () => {
    localStorage.removeItem("user");
};

const addVisitor = (data) => {
    const token = Util.getToken();
    const config = { headers: { Authorization: `Bearer ${token}` } }
    return axios.post("http://localhost:5000/api/visitor/createVisitors", data, config);
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

//export default new AuthService();



// const cors = require('cors');
// const corsOptions ={
//     origin:'http://localhost:3000', 
//     credentials:true,            //access-control-allow-credentials:true
//     optionSuccessStatus:200
// }

// app.use(cors(corsOptions));