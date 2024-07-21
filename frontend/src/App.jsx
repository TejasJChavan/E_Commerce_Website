import Navbar from "./components/Navbar.jsx";
import Carousel from "./components/Carousel.jsx";
import Features from "./components/Features.jsx";
import Grid from "./components/Grid.jsx";
import Login from "./components/Login.jsx";
import Register from "./components/Register.jsx";
import Home from "./components/Home.jsx";
import { createContext, useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export const UserContext = createContext(null);

function App() {
  const [isLoggedIn, setLogin] = useState(false);
  useEffect(()=>{
    console.log(isLoggedIn);
  }, [isLoggedIn]);
  return (
    <UserContext.Provider
      value={{ isLoggedIn: isLoggedIn, setLogin: setLogin }}
    >
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
