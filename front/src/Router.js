import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import Aside from "./components/Aside";
import Register from "./components/auth/Register";
import Navbar from "./components/Navbar";
import Login from "./components/auth/Login"

function Router(){
    return (
        <BrowserRouter>
        <Navbar />
         <main className="max-w-lg m-auto flex bg-white">
        <Aside />
        <Routes>
        <Route path="/notes" element={<Home />}  />
        <Route path="/register" element={<Register />}  />
        <Route path="/login" element={<Login />}  />
    </Routes>
    </main>
    </BrowserRouter>

    )
}

export default Router;