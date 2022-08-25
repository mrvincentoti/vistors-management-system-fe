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

const addVisitor = (data) => {
    return axios.post("http://localhost:5000/api/visitor/createVisitors", data);
}

const AuthService = {
    login,
    getCurrentUser,
    logout
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