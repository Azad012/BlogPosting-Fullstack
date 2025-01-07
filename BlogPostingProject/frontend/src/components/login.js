import React, { useState } from 'react';
import Navbar from './navbar';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Login = () => {

    const navigate = useNavigate()
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [token, setToken] = useState('token')
    //slow coding



    const handleSubmit = () =>{
        const payload = {
            username: username,
            password: password
        }

        axios.post('http://localhost:8080/api/auth/login', payload)
        .then((res)=>{
           localStorage.setItem("token", JSON.stringify(res.data.accessToken ));
            console.log("login successful", res);
            console.log(localStorage.getItem);
            setError("login successful");
            navigate("/")

        })
        .catch((err)=>{
            console.log("login faild", err);
            setError("login faild")
        });
    };


    return (
       <>
       <Navbar />
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-center">Login</h2>

                {error && <div className='bg-green-400'> {error} </div>}
                
                    <div>
                        <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                             Username
                        </label>
                        <input
                            id="username"
                            name="username"
                            type="text"
                            required
                            className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                            Password
                        </label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            required
                            className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className='flex justify-between'>
                        <button
                            onClick={handleSubmit}
                         
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        
                        >
                            Sign in
                        </button>
                        <button
                            onClick={handleSubmit}
                         
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline "
                        
                        >
                            Sign Up
                        </button>
                    </div>
            
            </div>
        </div>
       </>
    );
};

export default Login;