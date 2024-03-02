import React, {  useState, useEffect } from 'react';

export const CurrentUserContext = React.createContext({} as any);

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(() => {
        const loggedInUser = localStorage.getItem("user");
        if (loggedInUser) {
            try {
                return JSON.parse(loggedInUser);
            } catch (error) {
                console.error("Error parsing user from localStorage", error);
                return null;
            }
        }
        return null;
    });

    useEffect(() => {
        if (user) {
            localStorage.setItem('user', JSON.stringify(user));
            // console.log(user)
        } else {
            localStorage.removeItem('user');
        }
    }, [user]);

    const value = { user, setUser }

    return (
        <CurrentUserContext.Provider value={value} >
            {children}
        </CurrentUserContext.Provider>
    );
};
