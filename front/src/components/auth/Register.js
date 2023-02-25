import React, { useContext, useState } from "react";
import {useNavigate} from "react-router-dom"

import axios from "axios";
import AuthContext from "../../context/AuthContext";

function Register(){
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVerify, setPasswordVerify] = useState("");
  const navigate = useNavigate();
  const { getLoggedIn } = useContext(AuthContext);


  async function register(e){
    e.preventDefault();
try {
  const registerData = {
    email,
    password,
    passwordVerify,

  };

  await axios.post("http://localhost:5001/auth/", registerData)
  await getLoggedIn();
  navigate("/notes")
} catch (error) {
  console.error(error);
}
  }


    return (
        <section className="max-w-md m-auto">
          <h2 className="text-center">Register</h2>
         <div className="p-4">
         <form onSubmit={register} className="bg-green-100 flex flex-col pt-4 pb-4">
            <input
            type="email"
            className="m-auto p-1 rounded-md outline-0"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            />
             <input
             type="password"
             className="m-auto mt-2 p-1 rounded-md outline-0"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            />
               <input
             type="password"
             className="m-auto mt-2 p-1 rounded-md outline-0"
            placeholder="Verify Password"
            onChange={(e) => setPasswordVerify(e.target.value)}
            value={passwordVerify}
            />
            <button className="bg-gray-100 m-auto mt-2 p-2 rounded-md">Submit</button>
          </form>

         </div>
        </section>
    )
}

export default Register;
