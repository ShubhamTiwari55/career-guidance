// src/components/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({ handleUserLogin, handleAdminLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const dummyUserCredentials = {
        username: 'user123',
        password: 'password123',
    };

    const dummyAdminCredentials = {
        username: 'admin123',
        password: 'adminpassword',
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (username === dummyUserCredentials.username && password === dummyUserCredentials.password) {
            handleUserLogin();
            navigate('/user/dashboard');
        } else if (username === dummyAdminCredentials.username && password === dummyAdminCredentials.password) {
            handleAdminLogin();
            navigate('/admin/dashboard');
        } else {
            alert('Invalid username or password');
        }
    };

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
            <form onSubmit={handleSubmit} className="w-1/3 bg-gray-800 p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-4 text-primary-red">Login</h2>
                <div className="mb-4">
                    <label className="block text-gray-300">Username</label>
                    <input
                        type="text"
                        className="w-full p-2 border border-gray-500 rounded"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-300">Password</label>
                    <input
                        type="password"
                        className="w-full p-2 border border-gray-500 rounded"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-primary-red text-white p-2 rounded hover:bg-black hover:text-primary-red"
                >
                    Login
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

export default Login;
