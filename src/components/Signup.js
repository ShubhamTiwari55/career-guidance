// src/components/Signup.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = ({ handleUserLogin, handleAdminLogin }) => {
    const navigate = useNavigate();

    const handleTestUserLogin = () => {
        handleUserLogin();
        navigate('/user/dashboard');
    };

    const handleTestAdminLogin = () => {
        handleAdminLogin();
        navigate('/admin/dashboard');
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-black text-black">
            <form className="w-1/3 bg-gray-800 p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-4 text-primary-red">Sign Up</h2>
                <div className="mb-4">
                    <label className="block text-gray-300">Username</label>
                    <input
                        type="text"
                        className="w-full p-2 border border-gray-500 rounded"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-300">Password</label>
                    <input
                        type="password"
                        className="w-full p-2 border border-gray-500 rounded"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-primary-red text-white p-2 rounded hover:bg-black hover:text-primary-red"
                >
                    Sign Up
                </button>
            </form>

            <div className="mt-6 flex flex-col items-center gap-4">
                <button
                    onClick={handleTestUserLogin}
                    className="bg-primary-red text-white p-2 rounded hover:bg-black hover:text-primary-red"
                >
                    Test Login as User
                </button>
                <button
                    onClick={handleTestAdminLogin}
                    className="bg-primary-red text-white p-2 rounded hover:bg-black hover:text-primary-red"
                >
                    Test Login as Admin
                </button>
            </div>
        </div>
    );
};

export default Signup;
