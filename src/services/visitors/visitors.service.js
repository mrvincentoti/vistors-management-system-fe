import axios from 'axios';
import Util from '../../util/common';

const domain = process.env.NODE_ENV !== 'production' ? process.env.REACT_APP_LOCAL_HOST : process.env.REACT_APP_LOCAL_HOST;


const getAllVisitors = () => {
    const token = Util.getToken();
    const config = { headers: { Authorization: `Bearer ${token}` } }
    return axios.get(`${domain}/api/visitor/getVisitors`, config);
}
const getVisitorsNumber = () => {
    const token = Util.getToken();
    const config = { headers: { Authorization: `Bearer ${token}` } }
    return axios.get(`${domain}/api/visitor/getVisitorsNumber`, config);
}
const getVisitorsSignOutNumber = () => {
    const token = Util.getToken();
    const config = { headers: { Authorization: `Bearer ${token}` } }
    return axios.get(`${domain}/api/visitor/getVisitorsSignOutNumber`, config);
}
const allVisitors = () => {
    const token = Util.getToken();
    const config = { headers: { Authorization: `Bearer ${token}` } }
    return axios.get(`${domain}/api/visitor/getAllVisitors`, config);
}
const findByFullname = (fullName) => {
    const token = Util.getToken();
    const config = { headers: { Authorization: `Bearer ${token}` } }
    return axios.get(`${domain}/api/visitor/getVisitorByFullname?fullname=${fullName}`, config);
}
const signedInVisitors = (fullName) => {
    const token = Util.getToken();
    const config = { headers: { Authorization: `Bearer ${token}` } }
    return axios.get(`${domain}/api/visitor/signedInVisitors?fullname=${fullName}`, config);
}

const visitorClockout = (visitor) => {
    const token = Util.getToken();
    const config = { headers: { Authorization: `Bearer ${token}` } }
    return axios.patch(`${domain}/api/visitor/updateVisitorClockout`, visitor, config);
}
const getVisitorByVisitorId = (v_id) => {
    const token = Util.getToken();
    const config = { headers: { Authorization: `Bearer ${token}` } }
    return axios.get(`${domain}/api/visitor/getVisitorsByVisitorId?id=${v_id}`, config);
}

const clockoutTagNumber = (visitor, tag) => {
    visitor.tag_no = tag;
    const token = Util.getToken();
    const config = { headers: { Authorization: `Bearer ${token}` } }
    return axios.patch(`${domain}/api/visitor/clockoutTagNumber`, visitor, config);
}



const VisitorsService = {
    allVisitors,
    getAllVisitors,
    getVisitorsNumber,
    findByFullname,
    visitorClockout,
    getVisitorsSignOutNumber,
    signedInVisitors,
    getVisitorByVisitorId,
    clockoutTagNumber
}

export default VisitorsService;
