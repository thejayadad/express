import { BrowserRouter, Routes, Route } from "react-router-dom";
import Aside from "./components/Aside";
import Register from "./components/auth/Register";
import Navbar from "./components/Navbar";
import Login from "./components/auth/Login"
import Notes from "./components/Notes/Notes";
import AuthContext from "./context/AuthContext";
import React, { useContext } from "react";


function Router(){
    const { loggedIn } = useContext(AuthContext);
    return (
        <BrowserRouter>
        <Navbar />
         <main className="max-w-lg m-auto flex bg-white">
        <Aside />
        <Routes>
            {
                loggedIn === false && (
                    <>
        <Route path="/register" element={<Register />}  />
        <Route path="/login" element={<Login />}  />
                    </>
                )
            }
            {
                loggedIn === true && (
                    <>
        <Route path="/notes" element={<Notes />} />
                    </>
                )
            }

    </Routes>
    </main>
    </BrowserRouter>

    )
}

export default Router;