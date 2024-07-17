import { createContext, useEffect, useState } from "react";
import app from "../fireabse/firebase.config";
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import useAxiosSecure from "../customHooks/useAxiosSecure";

export const AuthContext  = createContext(null);



const AuthProvider = ({children}) => {
    const useAxios = useAxiosSecure();
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

    const loginUser = (email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,currentUser=>{
            const userEmail = currentUser?.email || user?.email;
            const loggedUser = {email: userEmail};
            if(currentUser){
                useAxios.post("/jwt")
                .then(res=>{
                    console.log("token response: ",res.data);
                });
            }else{
                useAxios.post("/logout",loggedUser).then(res=>{
                    console.log(res.data);
                })
            }   

            setUser(currentUser);
            setLoading(false);
        });
        return ()=>{
            unsubscribe();
        }
    },[auth,useAxios,user?.email])

    const logOut = ()=>{
        return signOut(auth);
    }

    const authInfo = {
        loading,
        user,
        createUser,
        createUserWithGoogle,
        loginUser,
        logOut,
    };
    return (
        <AuthContext.Provider  value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;