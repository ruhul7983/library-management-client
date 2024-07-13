import { createContext, useState } from "react";
import app from "../fireabse/firebase.config";
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

export const AuthContext  = createContext(null);



const AuthProvider = ({children}) => {
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);

    const createUser = (email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }
    const createUserWithGoogle = ()=>{
        setLoading(true);
        return signInWithPopup(auth,provider);
    }

    const authInfo = {
        createUser,
        createUserWithGoogle,
    };
    return (
        <AuthContext.Provider  value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;