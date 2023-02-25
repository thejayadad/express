import React, { useContext } from "react";
import {Link} from "react-router-dom"
import AuthContext from "../context/AuthContext.js";
import LogOut from "./auth/LogOut.js";

const Navbar = () => {
  const { loggedIn } = useContext(AuthContext);

  return (
    <header className="max-w-lg m-auto border-b border-gray-300 flex justify-between mt-4 pb-2">
    <h2 className='ml-20'><Link to="/login">Notes App</Link></h2>
    <ul className="flex justify-evenly pr-3">
      {
        loggedIn === false && (
          <>
          <li className="mr-4"><Link to="/register">Register</Link></li>
      <li className="mr-4"><Link to="/login">Login</Link></li>
          </>
        )}
        {
          loggedIn === true && (
            <>
          <li className="mr-4"><Link to="/notes">Notes</Link></li>
          <li className="mr-4"><Link to="/login"><LogOut /></Link></li>

            </>
          )
        }

    </ul>
  </header>
  )
}

export default Navbar