import { createContext, useState } from "react";
import app from "../fireabse/firebase.config";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export const AuthContext  = createContext(null);



const AuthProvider = () => {
    const auth = getAuth(app);

    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);

    const createUser = (email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const authInfo = {
        createUser,
    };
    return (
        <AuthContext.Provider  value={authInfo}>
            
        </AuthContext.Provider>
    );
};

export default AuthProvider;