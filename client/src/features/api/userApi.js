import { getToken } from "../utils/getters";

const DONT_PROCEED = { proceed: false };

const getOptions = (route, method, postData) => ({
    proceed: true,
    route,
    method,
    postData
})

const userApi = {
    login: (email, password) => {
        return getOptions('/login', 'POST', { email, password });
    },

    register: (name, email, password) => {
        return getOptions('/register', 'POST', { name, email, password });
    },

    getUser: () => {
        const token = getToken();
        if (!token) return DONT_PROCEED;
        return getOptions('/getUser', 'GET');
    }

};

export default userApi;