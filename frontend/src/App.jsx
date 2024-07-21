import { createContext, useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/Login.jsx";
import Register from "./components/Register.jsx";
import Home from "./components/Home.jsx";
import Cart from "./components/Cart.jsx";

export const UserContext = createContext(null);

function App() {
  const [isLoggedIn, setLogin] = useState(false);

  useEffect(() => {
    console.log(isLoggedIn);
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
