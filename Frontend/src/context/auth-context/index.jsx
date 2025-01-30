import { initialSignInFormData, initialSignUpFormData } from "@/config";
import { createContext, useState } from "react";
import { registerService } from "../../services/index.js";

export const AuthContext = createContext(null);
// creating a  AuthContext

export default function AuthProvider({ children }) {
  const [signInFormData, setSignInFormData] = useState(initialSignInFormData);
  const [signUpFormData, setSignUpFormData] = useState(initialSignUpFormData);


  async function handleRegisterUser(event) {
    event.preventDefault();
    const data = await registerService(signUpFormData);

    console.log(data);
    
  }

  return (
    <AuthContext.Provider
      value={{
        signInFormData,
        setSignInFormData,
        signUpFormData,
        setSignUpFormData,
        handleRegisterUser
      }}
    >
      {children}
    </AuthContext.Provider>
  );
} // creating a  AuthProvider pass all the childer or all the nested context
//  passing global state or context vale
