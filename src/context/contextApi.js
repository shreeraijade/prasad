import React, { createContext, useState, useEffect } from 'react';
import Cookies from 'js-cookie';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    // const accessToken = Cookies.get('accessToken');
    // const refreshToken = Cookies.get('refreshToken');

    // if (accessToken && refreshToken) {
    //   // Fetch user data or validate tokens here if needed
    //   setIsLoggedIn(true);
    //   setUser({ name: 'John Doe' }); // Replace with actual user data fetching
    // } else {
    //   setIsLoggedIn(false);
    //   setUser(null);
    // }
  }, []);

  const signin=(user)=>{
    setIsLoggedIn(true);
    setUser(user)
  }

  const login = (username, password) => {
 
    const options = {
        method: 'POST', // HTTP method for the request
        headers: {
            'Content-Type': 'application/json', // Ensures that the request body is in JSON format
        },
        body: JSON.stringify({ username, password }), // Converts the credentials to a JSON string
        credentials: 'include', // Include cookies in the request (if needed)
    };

    fetch("http://localhost:8000/api/v1/user/signIn", options)
        .then(response => {
            if (!response.ok) {
                throw new Error('Login failed'); // Throw an error if the response status is not 2xx
            }
            return response.json(); // Parse the JSON response
        })
        .then(data => {
            // Assuming the server returns accessToken and user data
            const { accessToken, refreshToken, user } = data;

            // Set the tokens in cookies (uncomment if needed)
            // Cookies.set('accessToken', accessToken, { secure: true, sameSite: 'Strict' });
            // Cookies.set('refreshToken', refreshToken, { secure: true, sameSite: 'Strict' });

            // Update the login state and user data
            setIsLoggedIn(true);
            setUser(user);
        })
        .catch(err => {
            console.error(err);
            setIsLoggedIn(false); // Handle login failure
        });
};

    
    
  };

  const logout = () => {
    Cookies.remove('accessToken');
    Cookies.remove('refreshToken');
    setIsLoggedIn(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, user, login, logout, signin }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
