import axios from 'axios';
import Util from '../../util/common';

const getAllVisitors = () => {
    const token = Util.getToken();
    const config = { headers: { Authorization: `Bearer ${token}` } }
    return axios.get("http://localhost:5000/api/visitor/getVisitors", config);
}
const allVisitors = () => {
    const token = Util.getToken();
    const config = { headers: { Authorization: `Bearer ${token}` } }
    return axios.get("http://localhost:5000/api/visitor/getAllVisitors", config);
}
const findByFullname = (fullName) => {
    const token = Util.getToken();
    const config = { headers: { Authorization: `Bearer ${token}` } }
    return axios.get("http://localhost:5000/api/visitor/getVisitorByFullname?fullname="+fullName, config);
}

const  visitorClockout = () =>{
    const token = Util.getToken();
    const config = { headers: { Authorization: `Bearer ${token}` } }
    return axios.get("http://localhost:5000/api/visitor/updateVisitorClockout", config);
}



const  VisitorsService = {
    allVisitors,
    getAllVisitors,
    findByFullname,
    visitorClockout
}

export default VisitorsService;
