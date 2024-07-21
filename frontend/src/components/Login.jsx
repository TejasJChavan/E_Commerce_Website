import React, { useState, useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { UserContext } from "../App.jsx";
import Navbar from "./Navbar";

function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const { setLogin } = useContext(UserContext);
  const [error, setError] = useState(location.state?.error || "");
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  async function onSubmit(e) {
    e.preventDefault();
    if (!user.password) {
      setError("Password cannot be empty!");
    } else if (!user.email) {
      setError("Email cannot be empty!");
    } else {
      try {
        const response = await fetch("http://localhost:8080/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user),
        });
        const data = await response.json();
        if (response.status === 400) {
          setError(data.error);
        } else if (response.status === 201) {
          localStorage.setItem("isLoggedIn", "true");
          setLogin(true);
          navigate("/cart");
        } else {
          setError("An unexpected error occurred. Please try again later.");
        }
      } catch (err) {
        setError("Could not reach servers. Please try again later.");
      }
    }
  }

  function onChange(e) {
    const { name, value } = e.target;
    setUser((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }

  return (
    <>
      <Navbar />
      <div className="w-full min-h-screen bg-1 px-3 flex items-center justify-center">
        <form
          onSubmit={onSubmit}
          className="bg-2 px-10 py-10 rounded-2xl flex flex-col grow shrink max-w-xl"
        >
          <div className="text-center mb-8 text-4xl">Login</div>
          {error && <div className="text-red-500 mb-4">{error}</div>}
          <label className="font-medium">Email</label>
          <input
            name="email"
            placeholder="Enter Email"
            className="w-full border-2 p-3 rounded-lg my-3"
            onChange={onChange}
            value={user.email}
          ></input>
          <label className="font-medium">Password</label>
          <input
            name="password"
            placeholder="Enter Password"
            type="password"
            className="w-full border-2 p-3 rounded-lg my-3"
            onChange={onChange}
            value={user.password}
          ></input>
          <button
            type="submit"
            className="w-full p-3 bg-5 rounded-2xl my-3 text-white hover:scale-[1.02] transition-all active:scale-[0.99]"
          >
            Login
          </button>

          <div className="my-2 place-self-center">
            Don't have an account?{" "}
            <span
              className="text-3 cursor-pointer"
              onClick={() => navigate("/register")}
            >
              Register
            </span>
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;
