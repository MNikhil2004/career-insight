// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import './css/Signup.css';

// function Signup() {
//     const [name, setName] = useState("");
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [message, setMessage] = useState("");
//     const navigate = useNavigate();

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await axios.post('http://localhost:5000/api/users/signup', { name, email, password });
//             setMessage(response.data.message);
//             navigate('/login'); // Redirect to login page after successful signup
//         } catch (error) {
//             console.error('Error during registration:', error);
//             setMessage('Error during registration: ' + (error.response?.data?.message || error.message));
//         }
//     };

//     return (
//         <div className="signup-container">
//             <div className="signup-card">
//                 <h2>Sign Up</h2>
//                 <form onSubmit={handleSubmit}>
//                     <input
//                         type="text"
//                         placeholder="Name"
//                         id="name"
//                         value={name}
//                         onChange={(e) => setName(e.target.value)}
//                         required 
//                     />
//                     <input
//                         type="email"
//                         placeholder="Email"
//                         id="email"
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)}
//                         required
//                     />
//                     <input
//                         type="password"
//                         placeholder="Password"
//                         id="password"
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                         required 
//                     />
//                     <button type="submit">Sign Up</button>
//                 </form>
//                 {message && <p className="error">{message}</p>}
//                 <p>Already have an account? <Link to="/login">Login</Link></p>
//             </div>
//         </div>
//     );
// }

// export default Signup;
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './css/Signup.css';

function Signup() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (password.length < 8) {
            setMessage('Password must be at least 8 characters long.');
            return;
        }
        
        try {
            const response = await axios.post('http://localhost:5000/api/users/signup', { name, email, password });
            setMessage(response.data.message);
            navigate('/login'); // Redirect to login page after successful signup
        } catch (error) {
            console.error('Error during registration:', error);
            setMessage('Error during registration: ' + (error.response?.data?.message || error.message));
        }
    };

    return (
        <div className="signup-container">
            <div className="signup-card">
                <h2>Sign Up</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Name"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required 
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required 
                    />
                    <button type="submit">Sign Up</button>
                </form>
                {message && <p className="error">{message}</p>}
                <p>Already have an account? <Link to="/login">Login</Link></p>
            </div>
        </div>
    );
}

export default Signup;
