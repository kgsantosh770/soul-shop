const isValidEmail = (email) => {
    var validRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (validRegex.test(email))
        return true;
    return false;
}

export { isValidEmail }