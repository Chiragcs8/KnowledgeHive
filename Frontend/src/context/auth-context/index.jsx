import { initialSignInFormData, initialSignUpFormData } from "@/config";
import { createContext, useState } from "react";
import { loginService, registerService } from "../../services/index.js";

export const AuthContext = createContext(null);
// creating a  AuthContext

export default function AuthProvider({ children }) {
  const [signInFormData, setSignInFormData] = useState(initialSignInFormData);
  const [signUpFormData, setSignUpFormData] = useState(initialSignUpFormData);
  const [auth, setAuth] = useState({
    authenticate : false,
    user : null
  })


  async function handleRegisterUser(event) {
    event.preventDefault();
    const data = await registerService(signUpFormData);   
  }

  async function handleLoginUser(event) {
    event.preventDefault();
    const data = await loginService(signInFormData);

    if(data.success) {

      sessionStorage.setItem('accessToken', JSON.stringify(data.data.accessToken));
      setAuth({
        authenticate : true,
        user : data.data.user
      })
    }
  }


  return (
    <AuthContext.Provider
      value={{
        signInFormData,
        setSignInFormData,
        signUpFormData,
        setSignUpFormData,
        handleRegisterUser, 
        handleLoginUser
      }}
    >
      {children}
    </AuthContext.Provider>
  );
} // creating a  AuthProvider pass all the childer or all the nested context
//  passing global state or context vale
