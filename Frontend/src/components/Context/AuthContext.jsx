import React, { createContext, useState, useEffect, useContext } from 'react';
import Cookies from 'js-cookie';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isLoggedIn , setIsLoggedIn] = useState(false) ;

  useEffect(() => {
    const storedToken = Cookies.get('authToken');

    if (storedToken) {
      // Check if the token is still valid by trying to decode it
      try {
        // Simple check - if token exists and is not empty
        if (storedToken && storedToken.length > 0) {
          setToken(storedToken);
          setIsLoggedIn(true)
        } else {
          // Token is invalid, remove it
          Cookies.remove('authToken');
        }
      } catch (error) {
        console.error('Invalid token:', error);
        Cookies.remove('authToken');
        setIsLoggedIn(false)
      }
    }
    setLoading(false);
  }, []);

  const login = (newToken) => {
    setToken(newToken);
    Cookies.set('authToken', newToken, {
      expires: 7,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict'
    });
  };

  const logout = () => {
    setToken(null);
    Cookies.remove('authToken');
  };

  return (
    <AuthContext.Provider value={{ token, isLoggedIn, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === null) {
    // Return a default value during static build
    return {
      token: null,
      isLoggedIn: false,
      loading: true,
      login: () => {},
      logout: () => {}
    };
  }
  return context;
};
