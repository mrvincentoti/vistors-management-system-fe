import axios from 'axios';

class AuthService {
    login = (data) => {
        return axios.post("http://localhost:5000/api/users/login", data);
    }
}

export default new AuthService();



// const cors = require('cors');
// const corsOptions ={
//     origin:'http://localhost:3000', 
//     credentials:true,            //access-control-allow-credentials:true
//     optionSuccessStatus:200
// }
// app.use(cors(corsOptions));