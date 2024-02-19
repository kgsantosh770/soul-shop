const isValidEmail = (email) => {
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (validRegex.test(email))
        return true;
    return false;
}

const isAuthorized = () => {
    return localStorage.getItem('auth') !== null ? true : false;
}

export { isValidEmail, isAuthorized }