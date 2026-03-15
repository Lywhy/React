import { useState } from "react";
import { UserContext } from "./UserContext";

export function UserContextProvider({ children }) {
    const [currentUser, setCurrentUser] = useState([])

    const refreshUser = () => {
        const users = JSON.parse(localStorage.getItem('users') || '[]');
        setCurrentUser(users.find(user => user.isLogined));
    };

    return (
        <UserContext.Provider value={{ currentUser, refreshUser }}>
            {children}
        </UserContext.Provider>
    )
}