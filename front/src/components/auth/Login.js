import React, { useContext, useState } from "react";
import {useNavigate} from "react-router-dom"

import axios from "axios";
import AuthContext from "../../context/AuthContext";


function Login(){
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { getLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();


  async function login(e){
    e.preventDefault();
try {

  const loginData = {
    email,
    password,

  };

  await axios.post("http://localhost:5001/auth/login", loginData)
  await getLoggedIn();
  navigate("/notes");
} catch (error) {
  console.error(error);
}
  }


    return (
        <section className="max-w-md m-auto">
          <h2 className="text-center">Login</h2>
         <div className="p-4">
         <form onSubmit={login} className="bg-green-100 flex flex-col pt-4 pb-4">
            <input
            className="m-auto p-1 rounded-md outline-0"
            type="email"
            placeholder="Email"
               onChange={(e) => setEmail(e.target.value)}
            value={email}
            />
             <input
             className="m-auto mt-2 p-1 rounded-md outline-0"
            placeholder="Password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            />
            <button className="bg-gray-100 m-auto mt-2 p-2 rounded-md">Login</button>
          </form>

         </div>
        </section>
    )
}

export default Login;
