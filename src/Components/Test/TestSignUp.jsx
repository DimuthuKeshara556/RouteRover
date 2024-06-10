import React, { useState } from 'react';

const TestSignUp = ({ setUser }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSignUp = (e) => {
        e.preventDefault();
        const user = { username, password };
        localStorage.setItem('user', JSON.stringify(user));
        setUser(user);
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <form onSubmit={handleSignUp} className="bg-white p-6 rounded shadow-md w-80">
                <h2 className="text-2xl mb-4">Sign Up</h2>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="block w-full p-2 mb-4 border rounded"
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="block w-full p-2 mb-4 border rounded"
                />
                <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">
                    Sign Up
                </button>
            </form>
        </div>
    );
};

export default TestSignUp;
