import axios from 'axios';

const getUser = () => {
    return axios.get("http://localhost:5000/api/user/getUsers");
}


const UserService = {
    getUser
}
export default UserService;