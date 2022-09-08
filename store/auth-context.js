import React, { useState } from 'react';

const AuthContext = React.createContext({
  token: '',
  isAuthenticated: false,
  login: (user) => {},
  logout: () => {},
});

export const AuthContextProvider = function (props) {
  const initialUser = JSON.parse(
    typeof globalThis.window !== 'undefined'
      ? localStorage.getItem('admin')
      : null
  );

  const [token, setToken] = useState(initialUser ? initialUser.idToken : null);

  const userIsLoggedIn = !!token;

  const loginHandler = function (user) {
    setToken(user.idToken);
    localStorage.setItem('admin', JSON.stringify(user));
  };

  const logoutHandler = function () {
    setToken(null);
    localStorage.removeItem('admin');
  };

  const contextValue = {
    token: token,
    isAuthenticated: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
