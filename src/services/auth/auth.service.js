
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
    const config = { headers: { Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyZXN1bHQiOnsiaWQiOjEwLCJ1c2VybmFtZSI6ImFsYWJhIiwiZW1haWwiOiJhbGFiYUBnbWFpbC5jb20iLCJmaXJzdF9uYW1lIjoiZGF2aWQiLCJsYXN0X25hbWUiOiJEYXZpZCIsInBob25lX251bWJlciI6IjA4NDE0NTQ1NDUiLCJnZW5kZXJfaWQiOjEsImRlcGFydG1lbnRfaWQiOjF9LCJpYXQiOjE2NjEzNjA2MTAsImV4cCI6MTY2MTM2NDIxMH0.3_MQm0yeOEqrPjO0feCmY-x0VpfOIdt1tm1ZD2TjfhQ` } }
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