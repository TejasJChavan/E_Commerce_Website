import { createContext, useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/Login.jsx";
import Register from "./components/Register.jsx";
import Home from "./components/Home.jsx";
import Cart from "./components/Cart.jsx";

export const UserContext = createContext(null);

function App() {
  // Initialize the login state from local storage
  const [isLoggedIn, setLogin] = useState(() => {
    return localStorage.getItem("isLoggedIn") === "true";
  });

  useEffect(() => {
    console.log(isLoggedIn);
    // Store the login state in local storage whenever it changes
    localStorage.setItem("isLoggedIn", isLoggedIn);
  }, [isLoggedIn]);

  return (
    <UserContext.Provider value={{ isLoggedIn, setLogin }}>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route 
            path="/cart" 
            element={isLoggedIn ? <Cart /> : <Navigate to="/login" replace state={{ error: "Please login before accessing cart!" }} />} 
          />
        </Routes>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
