import axios from 'axios';
import Util from '../../util/common';

const getAllVisitors = () => {
    const token = Util.getToken();
    const config = { headers: { Authorization: `Bearer ${token}` } }
    return axios.get("http://localhost:5000/api/visitor/getVisitors", config);
}

const  VisitorsService = {
    getAllVisitors
}

export default VisitorsService;
