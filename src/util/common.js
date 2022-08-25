const getToken = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    return user.token;
}

const Util = {
    getToken
}

export default Util;