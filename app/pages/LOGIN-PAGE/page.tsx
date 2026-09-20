'use client';
import { useState } from 'react';
import {faHomeAlt,faEnvelopeOpen,faUser, faLocation, faContactBook} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const LoginPage: React.FC = () => {
 const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const[name , setName] = useState('');

   
       return (
            <div className="w-full h-screen relative bg-linear-to-br from-purple-50 to-pink-100 flex items-center justify-center">
                <div className="w-400 h-130 md-0 absolute rounded-3xl flex justify-center items-center flex-col shadow-lg">
                <FontAwesomeIcon icon={faHomeAlt} className="text-4xl text-white mb-4" />
                <FontAwesomeIcon icon={faLocation} className="text-4xl text-white mb-4" />
                <FontAwesomeIcon icon={faEnvelopeOpen} className="text-4xl text-white mb-4" />
                <FontAwesomeIcon icon={faContactBook} className="text-4xl text-white mb-4" />
                
                </div>
                <div className="bg-gray-700 w-400 h-130 md-0 absolute rounded-3xl flex justify-center items-center flex-col shadow-lg">
                   
                   <div className="w-300 h-100 flex items-center justify-center bg-white rounded-lg">
                    
                    <div className="w-100 h-100 flex flex-col items-center justify-center ml-0 ">
                        <button className="bg-white text-black font-semibold p-2 rounded-2xl mt-2 shadow-lg mr-150 border border-gray-950">veela</button>
                       
                        {/* Login Form  with two divs */}
                        <div className="w-100 h-100 flex flex-col text-center  justify-center gap-3 mr-20">
                           <h1 className="text-2xl font-bold mb-0 text-gray-800 mr-40">Create an account</h1>
                        <p className="text-gray-600 text-sm mt-0 mb-2 mr-40">signup and get 30 days free trial.</p>  
                        <input  type="text"
                            placeholder="  Enter your full name"
                            className="mb-2 flex justify-center items-center border gap-3 text-black border-gray-300 rounded-lg w-60 h-10 focus:outline-none focus:ring-2 focus:border-transparent"
                            value={name}   
                            onChange={(e) => setName(e.target.value)}
                        />
                            
                        <input  type="text"
                            placeholder="  Email"
                            className="mb-2 flex justify-center items-center border gap-3 w-60 h-10 text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:border-transparent"
                            value={email}   
                            onChange={(e) => setEmail(e.target.value)}
                        />
                           

                        <input  type="password"
                            placeholder="  Password"
                            className="mb-2 flex justify-center items-center border gap-3 w-60 h-10 text-black border-gray-300 rounded-lg  focus:outline-none focus:ring-2 focus:border-transparent"
                            value={password}   
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold w-60 h-10 rounded-lg shadow-md transition-colors duration-200"
                        onClick={() => {                            // Handle form submission logic here
                            console.log('Name:', name);
                            console.log('Email:', email);
                            console.log('Password:', password);
                        }}>
                        </button>
                        </div>
                         </div>
                         <div className="w-100 h-100 flex flex-col  justify-center ml-0 gap-6">
                            <img src="veraFamily.JPG" alt="vera and friends" 
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                         </div>   
                    </div>
                    </div>
                    </div>
     );
}
export default LoginPage;