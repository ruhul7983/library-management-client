import Navbar from "../Shared/Navbar/Navbar";
import { FcGoogle } from "react-icons/fc";
import login from '../../assets/login.png';
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const Login = () => {
    const {loginUser, createUserWithGoogle} = useContext(AuthContext);
    const [error,setError] = useState(""); 
    const navigate = useNavigate();
    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        loginUser(email,password)
        .then(res=>{
            console.log(res.user);
            navigate('/');
        })
        .then(err=>{
            console.log(err.message);
            setError("Invalid email or password")
        })
    }

    
    const handleRegisterWithGoogle = ()=>{
        createUserWithGoogle()
        .then(res=>{
            console.log(res.user);
            navigate('/');

        })
        .then(err=>{
            console.log(err.message);
        })
    }

    return (
        <div>
            <Navbar></Navbar>
            <div className="grid grid-cols-1 order-last md:grid-cols-2 max-w-5xl mx-auto rounded items-center bg-[#f9e6e6] my-5 text-black px-2 py-4 md:py-28 md:px-32">
                <div className="space-y-2">
                    
                        <h1 className="text-2xl font-semibold italic">Our Library</h1>
                        <h1 className="text-2xl font-semibold">Login Now</h1>
                        <p>Hi Welcome back 👋 </p>
                        <div>
                            <button onClick={handleRegisterWithGoogle} className="flex items-center gap-x-3 px-2 py-2 rounded text-xs bg-[#ffa3be] w-full md:w-3/4"><FcGoogle /> Login With Google</button>
                        </div>
                        <div className="flex items-center w-full md:w-3/4 gap-x-2 justify-center">
                            <hr className="bg-gray-400 p-px flex-1"></hr>
                            <p className="text-[#000000] opacity-55 text-xs">or login with Email</p>
                            <hr className="bg-gray-400 p-px flex-1"></hr>
                        </div>
                        <form onSubmit={handleLogin}>
                        <div className="">
                            <label className="font-semibold">Email</label>
                            <br />
                            <input className="pl-2 pr-10 py-2 bg-[#ffa3be] placeholder:text-xs w-full md:w-3/4 placeholder-gray-800 rounded" type="email" required name="email" id="" placeholder="Enter your email" />
                        </div>
                        <div className="">
                            <label className="font-semibold">Password</label>
                            <br />
                            <input className="pl-2 pr-10 py-2 bg-[#ffa3be] placeholder:text-xs w-full md:w-3/4 placeholder-gray-800 rounded" type="password" required name="password" id="" placeholder="Enter your Password" />
                            <p className="text-blue-500 text-right w-full md:w-3/4 text-xs"><Link>Forget Password?</Link></p>
                            <p className="text-red-700 text-center w-full md:w-3/4 text-xs">{error}</p>
                        </div>
                        <input className="w-full md:w-3/4 bg-[#474bca] px-2 py-2 rounded text-center text-white " type="submit" value="Login" />
                        <p className="text-xs text-center w-full md:w-3/4">Not yet registered? <span className="text-[#474bca]"><Link to={"/register"}>Create an account</Link></span></p>
                    </form>
                </div>
                <div className="">
                    <img className="hidden md:block" src={login} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Login;