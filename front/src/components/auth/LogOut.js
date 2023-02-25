import axios from "axios";
import React, { useContext } from "react";
import {useNavigate} from "react-router-dom"
import AuthContext from "../../context/AuthContext";

const LogOut = () => {
    const { getLoggedIn } = useContext(AuthContext);
    const naviate = useNavigate();
    async function logOut() {
        await axios.get(
            "http://localhost:5001/auth/logout"
        );
        await getLoggedIn();
        naviate("/login");
      }
  return (
    <button onClick={logOut}>LogOut</button>
  )
}

export default LogOut