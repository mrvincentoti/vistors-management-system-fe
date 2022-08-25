
import axios from 'axios';


const login = (data) => {
    return axios.post("http://localhost:5000/api/user/login", data);
}

const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("user"));
};

const logout = () => {
    localStorage.removeItem("user");
};
const getToken = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    return user.token;

}

const addVisitor = (data) => {
    const token = getToken();
    const config = { headers: { Authorization: `Bearer ${token}` } }
    return axios.post("http://localhost:5000/api/visitor/createVisitors", data, config);
}

const AuthService = {
    login,
    getCurrentUser,
    logout,
    addVisitor
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