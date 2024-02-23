const isValidEmail = (email) => {
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (validRegex.test(email))
        return true;
    return false;
}

const isAuthorized = async () => {
    const token = localStorage.getItem('auth');
    if (token) {
        const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/verifyToken`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ token: token })
        });
        if (response.status === 200) return true;
    }
    return false;
}

export { isValidEmail, isAuthorized }