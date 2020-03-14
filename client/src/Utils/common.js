// return user data from session storage
export const getUser = () =>{
    const userStr = sessionStorage.getItem('user');
    if(userStr) return JSON.parse(userStr);
    else return null;
}

// retun token from session storage
export const getToken = () =>{
    return sessionStorage.getItem('token') || null;
}

export const getSession = () =>{
    return sessionStorage.getItem('session') || null;
}

// removes token and user from session storage
export const removeUserSession = () =>{
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('user');
}

// set the token and user from session storage
export const setUserSession = (token, user) =>{
    sessionStorage.setItem('token', token);
    sessionStorage.setItem('user', JSON.stringify(user));
}