import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import Aside from "./components/Aside";
import Register from "./components/auth/Register";
import Navbar from "./components/Navbar";

function Router(){
    return (
        <BrowserRouter>
        <Navbar />
         <main className="max-w-lg m-auto flex bg-white">
        <Aside />
        <Routes>
        <Route path="/" element={<Home />}  />
        <Route path="/register" element={<Register />}  />
    </Routes>
    </main>
    </BrowserRouter>

    )
}

export default Router;