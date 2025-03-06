import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./Components/Home";
import MyNavbar from "./Components/Navbar";
function App() {
  

  return (
    <>
        <BrowserRouter>
            <MyNavbar />
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </BrowserRouter>
     </>
  )
}

export default App
