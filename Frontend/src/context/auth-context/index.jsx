import { createContext } from "react";

export const AuthContext = createContext(null);
// creating a  AuthContext

export default function AuthProvider({children}){

    return <AuthContext.Provider value={({})}>{children}</AuthContext.Provider>
} // creating a  AuthProvider pass all the childer or all the nested context
//  passing global state or context vale