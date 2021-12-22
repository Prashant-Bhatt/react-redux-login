// return the user data from the session storage
export const getUser = () => {
    const userStr = localStorage.getItem('csLoginUser');
    if (userStr) return atob(userStr);
    else return null;
  }
   
  // return the token from the session storage
  export const getToken = () => {
    return localStorage.getItem('csLoginToken') || null;
  }
   
  // remove the token and user from the session storage
  export const removeUserSession = () => {
    localStorage.removeItem('csLoginToken');
    localStorage.removeItem('csLoginUser');
  }
   
  // set the token and user from the session storage
  export const setUserSession = (token, user) => {
    localStorage.setItem('csLoginToken', token);
    localStorage.setItem('csLoginUser', user);
  }