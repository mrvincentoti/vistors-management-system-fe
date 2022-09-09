import axios from 'axios';

const domain = process.env.NODE_ENV !== 'production' ? process.env.REACT_APP_LOCAL_HOST : process.env.REACT_APP_LOCAL_HOST;


const getUser = () => {
    return axios.get(`${domain}/api/user/getUsers`);
}


const UserService = {
    getUser
}
export default UserService;