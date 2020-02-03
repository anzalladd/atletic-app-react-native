import React, {createContext, useState, useEffect} from 'react';

export const AuthContext = createContext();

const AuthContextProvider = props => {
  const [isLogin, setIsLogin] = useState(true);
  const [authForm, setAuthForm] = useState({
    email: '',
    password: '',
  });
  return (
    <AuthContext.Provider value={{isLogin, setIsLogin, authForm, setAuthForm}}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
