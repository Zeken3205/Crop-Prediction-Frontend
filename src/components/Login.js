import React, { useContext, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import Logincontext from '../Context/Logincontext';
function Login() {
    let navigate = useNavigate();

    const logincontext = useContext(Logincontext)
    useEffect(() => {
        console.log(logincontext.logincheck);
    }, [logincontext.logincheck]);
    const [credentials, setCredentials] = useState({ email: "", password: "" });
    const handleLoginSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email: credentials.email, password: credentials.password }),
        });
        const json = await response.json();
        console.log(json);
        if (json.Success) {
            //Save the auth token and redirect
            localStorage.setItem('token', json.authtoken);
            alert("Logged in Successfully");
            logincontext.setlogincheck(true);
            navigate("/");

        }
        else {
            alert("Invalid Credentials");
        }
    }
    const onlChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }
    return (
        <div className="bg-[#C1DABB]">
            <div className="flex flex-col items-center justify-center h-screen">
                <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Login</h2>
                    <form className="flex flex-col">
                        <input type="email" name="email" onChange={onlChange} className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" placeholder="Email address" />
                        <input type="password" name="password" onChange={onlChange} className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" placeholder="Password" />
                        <div className="flex items-center justify-between flex-wrap">
                            <label htmlFor="remember-me" className="text-sm text-gray-900 cursor-pointer">
                                <input type="checkbox" id="remember-me" className="mr-2" />
                                Remember me
                            </label>
                            <Link to="/forgotpassword" className="text-sm text-blue-500 hover:underline mb-0.5">Forgot password?</Link>
                            <p className="text-gray-900 mt-4"> Don't have an account? <Link to="/signup" className="text-sm text-blue-500 -200 hover:underline mt-4">Signup</Link></p>
                        </div>
                        <button type="submit" className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150" onClick={handleLoginSubmit}>Login</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
