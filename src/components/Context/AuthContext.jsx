import React, { createContext, useState, useEffect, useContext } from 'react';
import Cookies from 'js-cookie';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);
  const isLoggedIn = !!token;

  useEffect(() => {
    const storedToken = Cookies.get('authToken');

    if (storedToken) {
      // Check if the token is still valid by trying to decode it
      try {
        // Simple check - if token exists and is not empty
        if (storedToken && storedToken.length > 0) {
          setToken(storedToken);
        } else {
          // Token is invalid, remove it
          Cookies.remove('authToken');
        }
      } catch (error) {
        console.error('Invalid token:', error);
        Cookies.remove('authToken');
      }
    }
    setLoading(false);
  }, []);

  const login = (newToken) => {
    setToken(newToken);
    // Set cookie to expire in 10 seconds for testing
    Cookies.set('authToken', newToken, {
      expires: 7, // Set to expire in 7 days
      secure: process.env.NODE_ENV === 'production', // Only send over HTTPS in production
      sameSite: 'strict' // Protect against CSRF attacks
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

export const useAuth = () => useContext(AuthContext);
