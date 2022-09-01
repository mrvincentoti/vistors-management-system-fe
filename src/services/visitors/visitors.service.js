import axios from 'axios';
import Util from '../../util/common';

const getAllVisitors = () => {
    const token = Util.getToken();
    const config = { headers: { Authorization: `Bearer ${token}` } }
    return axios.get("http://localhost:5000/api/visitor/getVisitors", config);
}
const getVisitorsNumber = () => {
    const token = Util.getToken();
    const config = { headers: { Authorization: `Bearer ${token}` } }
    return axios.get("http://localhost:5000/api/visitor/getVisitorsNumber", config);
}
const getVisitorsSignOutNumber = () => {
    const token = Util.getToken();
    const config = { headers: { Authorization: `Bearer ${token}` } }
    return axios.get("http://localhost:5000/api/visitor/getVisitorsSignOutNumber", config);
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

const  visitorClockout = (visitor) =>{
    const token = Util.getToken();
    const config = { headers: { Authorization: `Bearer ${token}` } }
    return axios.patch("http://localhost:5000/api/visitor/updateVisitorClockout", visitor, config);
}



const  VisitorsService = {
    allVisitors,
    getAllVisitors,
    getVisitorsNumber,
    findByFullname,
    visitorClockout,
    getVisitorsSignOutNumber
}

export default VisitorsService;
